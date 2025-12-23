<?php

namespace App\Http\Controllers\pages;

use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

use App\Models\{Affiliate, Art, Collection, RecentForum, UserSession};
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;

class HomePageController extends Controller {
    public function index() {
        $crawler = $this->authenticate('https://opengameart.org');

        // dd($crawler);

        $recent_collections = $this->getRecentCollection($crawler);

        $recent_forum = $this->getRecentForums($crawler);

        $affiliates = $this->getAffiliates($crawler);

        $posts = $this->getPosts($crawler);

        $weekly_arts = $this->getWeeklyArts($crawler);

        $new_arts = $this->getNewArts($crawler);

        return response()->json([
            'recent_collections' => array_slice($recent_collections, 0, 5),
            'recent_forum' => array_slice($recent_forum, 0, 5),
            'affiliates' => $affiliates,
            'latest_banner_title' => $posts[0]['title'],
            'weekly_arts' => array_slice($weekly_arts, 0, 12),
            'new_arts' => array_slice($new_arts, 0, 12),
            'posts' => $posts
        ]);
        // } catch (\Exception $e) {
        //     return response([
        //         'content' => $e,
        //         'title' => '500 Error',
        //     ], 500);
        // }
    }

    private function getRecentCollection($crawler) {
        return $crawler->filter('.view-art-collections .view-content .item-list ul li .views-field-title a')
            ->each(function (Crawler $node) {
                $id = urldecode(preg_replace('#^/content/#', '', $node->attr('href')));
                $title = trim($node->text());

                // Checks if existed
                // If existed, just return the old data (complete than scraped)
                if (Collection::where('id', $id)->exists()) {
                    return Collection::where('id', $id)->with('user')->first()->toArray();
                }
                // If not existed then create new temporary data (needs to reupdate later)
                else {

                    return [
                        'id' => $id,
                        'title' => $title,
                        'content' => null,
                        'user' => null,
                    ];
                }
            });
    }

    private function getRecentForums($crawler) {
        return $crawler->filter('.view-new-forum-topics .view-content .item-list ul li')
            ->each(function (Crawler $node) {
                $id = parse_url(urldecode(preg_replace('#^/forumtopic/#', '', $node->filter('.views-field-title a')->attr('href'))), PHP_URL_PATH);
                $title = trim($node->filter('.views-field-title a')->text());

                if (RecentForum::where('id', $id)->exists()) {
                    return RecentForum::where('id', $id)->with('user')->first()->toArray();
                } else {
                    return [
                        'id' => $id,
                        'user_id' => null,
                        'title'     => $title,
                        'created_at' => null,
                        'user'  => null,
                    ];
                }
            });
    }

    private function getAffiliates($crawler) {
        return $crawler->filter('.view-links .view-content .item-list ul li')
            ->each(function (Crawler $node) {
                $aTag = $node->filter('a');

                if (Affiliate::where('id', $aTag->attr('href'))->exists()) {
                    return Affiliate::where('id', $aTag->attr('href'))->first()->toArray();
                }

                return [
                    'id' => $aTag->attr('href'),
                    'title' => trim($aTag->text()),
                    'image_url' => null,
                ];
            });
    }

    private function getPosts($crawler) {
        return $crawler->filter('.view-blog .view-content .views-row')->each(function (Crawler $node) {
            $titleNode = $node->filter('.field-name-title h2 a');
            $bylineNode = $node->filter('.field-name-byline');
            $bodyNode = $node->filter('.field-name-body .field-item');
            $commentNode = $node->filter('.field-name-comment-count-link a');
            $authorImgNode = $node->filter('.field-name-ds-user-picture a img');

            return [
                'title'        => trim($titleNode->text()),
                'link'         => $titleNode->attr('href'),
                'author_name'  => trim($bylineNode->filter('a')->text()),
                'author_link'  => $bylineNode->filter('a')->attr('href'),
                'date'         => trim(preg_replace('/By .* on /', '', $bylineNode->text())),
                'content_html' => $bodyNode->html(),
                'comment_link' => $commentNode->attr('href'),
                'author_image' => $authorImgNode->attr('src'),
            ];
        });
    }

    private function getWeeklyArts($crawler) {
        return $crawler->filter('#block-views-art-block-9 .content .view-art .view-content .views-row')->each(function (Crawler $node) {
            $titleNode = $node->filter('.field-name-title a');
            $previewImgNode = $node->filter('.field-name-field-art-preview img');
            $playButtonNode = $node->filter('.play-button');

            $id = preg_replace('#^/content/#', '', $titleNode->attr('href'));
            // $user_id = null;
            $title = trim($titleNode->text());
            // $preview_image = $previewImgNode->attr('src');

            $previews = [];
            $type = 'Art';
            if ($playButtonNode->count()) {
                $previews[] = $playButtonNode->attr('data-mp3-url');
                $type = 'Music';
            } else {
                $previews[] = $previewImgNode->attr('src');
            }

            return $this->getArtsFromDatabaseIfExists($id, $title, $previews, $type);
        });
    }

    private function getNewArts($crawler) {
        return $crawler->filter('#block-views-art-block-6 .content .view-art .view-content .views-row')->each(function (Crawler $node) {
            $titleNode = $node->filter('.field-name-title a');
            $previewImgNode = $node->filter('.field-name-field-art-preview img');
            $playButtonNode = $node->filter('.play-button');

            $id = preg_replace('#^/content/#', '', $titleNode->attr('href'));
            $title = trim($titleNode->text());

            $previews = [];
            $type = 'Art';
            if ($playButtonNode->count()) {
                $previews[] = $playButtonNode->attr('data-mp3-url');
                $type = 'Music';
            } else {
                $previews[] = $previewImgNode->attr('src');
            }

            return $this->getArtsFromDatabaseIfExists($id, $title, $previews, $type);

            // title: string
            // link: string
            // preview_image: string [audio / image]
            // audio_ogg?: string
            // audio_mp3?: string

            // $item = [
            //     'title' => trim($titleNode->text()),
            //     'link' => $titleNode->attr('href'),
            //     'preview_image' => $previewImgNode->attr('src'),
            // ];

            // if ($playButtonNode->count()) {
            //     $item['audio_ogg'] = $playButtonNode->attr('data-ogg-url');
            //     $item['audio_mp3'] = $playButtonNode->attr('data-mp3-url');
            //     return $item;
            // } else {

            //     return $item;
            // }
        });
    }

    private function getArtsFromDatabaseIfExists(string $id, string $title, $previews, string $type) {
        $id = urldecode($id);
        // Checks if existed
        // If existed, just return the old data (complete than scraped)
        if (Art::where('id', $id)->exists()) {
            return Art::where('id', $id)->with(['user', 'art_category', 'art_previews.art_preview_category', 'files', 'art_comments.user'])->first()->toArray();
        }
        // If not existed then create new temporary data (needs to reupdate later)
        else {

            return [
                'id' => $id,
                'title' => $title,
                'user' => null,
                'art_category' => [
                    'name' => $type
                ],
                'art_previews' => [
                    [
                        'url' => $previews,
                        'id' => 1,
                        'art_preview_category' => [
                            'name' => 'image'
                        ],
                    ]
                ],

            ];
        }
    }
}

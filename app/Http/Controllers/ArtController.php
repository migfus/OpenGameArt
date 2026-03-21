<?php

namespace App\Http\Controllers;

use App\Models\{Art, ArtCategory, ArtPreview, ArtPreviewCategory, Tag, User, ArtComment, ArtType, Collection, File, UserSession};

use Carbon\Carbon;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;
use Illuminate\Http\{JsonResponse, Request};
use Symfony\Component\DomCrawler\Crawler;

class ArtController extends Controller {

    // NOTE: HOW IT WORKS
    // https://oga-ui-test.migfus.site/images/how-it-works/art-controller-update.png
    public function update(Request $req, string $id): JsonResponse {
        $crawler = $this->authenticate("https://opengameart.org/content/{$id}", $req->bearerToken());

        // SECTION: TAGS
        $tag_ids = $this->scrapeAllTagsAndStore($crawler, $id);

        // SECTION: ART
        $art = [
            'favorites_count' => $this->scrapeTotalFavorites($crawler),
            'title' => $crawler->filterXPath("//div[@property='dc:title']//h2[1]")->text(),
            'content' => $crawler->filterXPath("//div[@class='group-right right-column']/div[2]")->html(),
            'created_at' => Carbon::createFromFormat('l, F j, Y - H:i', $crawler->filterXPath("(//div[@class='field-item even'])[3]")->text())->format('Y-m-d H:i:s'),
        ];


        // SECTION: ART CATEGORY
        $art['art_category'] = $this->scrapeArtCategoryAndStore($crawler);

        // SECTION: COMMENTS COUNT
        $art['comments_count'] = $this->scrapeTotalComments($crawler);

        // SECTION: AUTHOR (OUTSIDE FROM ART URL)
        $art['author_id'] = $this->getAuthor($crawler, $req->bearerToken());

        $art_db = Art::updateOrCreate([
            'id' => $id
        ], [
            'title' => $art['title'],
            'content' => $art['content'],
            'user_id' => $art['author_id'],
            'art_category_id' => $art['art_category']->id, // change art_category
            'favorites_count' => $art['favorites_count'],
            'comments_count' => $art['comments_count'],
            'created_at' => $art['created_at'],
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        $art_db->tags()->sync($tag_ids);

        // SECTION: PREVIEWS
        $this->removeAllPreviousPreviews($id);
        $this->scrapeAllPreviewsAndStore($crawler, $art['art_category'], $id);

        // SECTION: LATEST COMMENT
        $this->removeLatestComment($id);
        // dd($req->bearerToken());
        $this->scrapeLatestCommentAndStore($crawler, $id, $req->bearerToken());

        // SECTION: FILES
        $this->removeAllPreviousFiles($id);
        $this->scrapeAllFilesAndStore($crawler, $id);

        return response()->json($art_db->load(['user', 'art_category', 'art_previews.art_preview_category', 'files', 'art_comments.user', 'tags']));
    }

    // SECTION: PREVIEWS
    private function removeAllPreviousPreviews(string $art_id): void {
        ArtPreview::where('art_id', $art_id)->delete();
    }
    private function scrapeAllPreviewsAndStore(Crawler $crawler, ArtCategory $art_category, string $art_id): void {
        $previews = $art_category->name == 'Music' || $art_category->name == 'Sound Effect' ?
            $crawler->filterXPath("//div[@class='group-right right-column']/div[1]/div[@class='field-items']/div")->each(function (Crawler $node) {
                if ($node->filter('.audio-preview .audio-preview-container .play-button')->count() > 0) {
                    return [
                        'url' => $node->filter('.audio-preview .audio-preview-container .play-button')->attr('data-mp3-url'),
                        'art_preview_category_id' => ArtPreviewCategory::where('name', 'audio')->first()->id
                    ];
                } else {
                    return [
                        'url' => $node->filter('a')->attr('href'),
                        'art_preview_category_id' => ArtPreviewCategory::where('name', 'image')->first()->id
                    ];
                }
            }) :
            $crawler->filterXPath("//div[@class='group-right right-column']/div[1]/div[@class='field-items']/div")->each(function (Crawler $node) {
                return [
                    'url' => $node->filter('a')->attr('href'),
                    'art_preview_category_id' => ArtPreviewCategory::where('name', 'image')->first()->id
                ];
            });

        $preview_id = [];

        foreach ($previews as $item) {
            $preview = ArtPreview::create([
                'art_id' => $art_id,
                'url' => $item['url'],
                'art_preview_category_id' => $item['art_preview_category_id']
            ]);
            $preview_id[] = $preview->id;
        }

        // return $preview_id;
    }


    // SECTION: LATEST COMMENT
    private function removeLatestComment(string $art_id): void {
        ArtComment::where('art_id', $art_id)->latest()->limit(1)->delete();
    }
    private function scrapeLatestCommentAndStore(Crawler $crawler, string $art_id, string | null $token): void {
        $comments = $crawler->filter('#comments .comment')->each(function (Crawler $node) {
            $url_username = null;
            $username = null;
            if ($node->filter('.group-left span a')->count() > 0) {
                $url_username = str_replace('/users/', '', $node->filter('.group-left span a')->attr('href'));
                $username = $node->filter('.group-left span a')->text();
            }
            return [
                'content' => $node->filter('.group-right .field .field-items')->html(),
                'url_username' => $url_username,
                'username' => $username ?? 'Anonymous',
                'created_at' => Carbon::createFromFormat('m/d/Y - H:i', $node->filter('.group-left .field-name-post-date .field-items .field-item')->text())->format('Y-m-d H:i:s'),
            ];
        });


        if ($comments) {
            $item = $comments[0];
            $user_id = null;

            if ($item['url_username']) {
                if (!User::where('url_username', $item['url_username'])->exists()) {
                    $user_id = $this->scrapeUserAndStore($item['url_username'], $item['username'], $token)->id;
                } else {
                    $user_id = User::where('url_username', $item['url_username'])->first()->id;
                }
            }

            ArtComment::create([
                'content' => $item['content'],
                'art_id' => $art_id,
                'user_id' => $user_id,
                'created_at' => $item['created_at']
            ]);
        }
    }

    // SECTION: FILES
    private function removeAllPreviousFiles(string $art_id): void {
        File::where('art_id', $art_id)->delete();
    }
    private function scrapeAllFilesAndStore(Crawler $crawler, string $art_id): void {
        $file_ids = [];

        $crawler->filter(".field-name-field-art-files .field-items")->each(function (Crawler $node) use ($art_id, &$file_ids) {
            $file = File::create([
                'art_id' => $art_id,
                'name' => $node->filter('.field-item .file a')->text(),
                'file_url' => $node->filter('.field-item .file a')->attr('href'),
                'file_size' => $node->filter('.field-item .file')->text(),
                'download_count' => $node->filter('.field-item .file .dlcount .dlcount-number')->text(),
            ]);
            $file_ids[] = $file->id;
        });
    }

    // SECTION: ART CATEGORY
    private function scrapeArtCategoryAndStore(Crawler $crawler): ArtCategory {
        $art_category_name = $crawler->filterXPath("//a[@property='rdfs:label skos:prefLabel']")->text();

        return ArtCategory::firstOrCreate([
            'name' => $art_category_name
        ]);
    }

    // SECTION: TOTAL COMMENTS
    private function scrapeTotalComments(Crawler $crawler): int {
        $total_comments = 0;

        if ($crawler->filter('.pager-last')->count() > 0) {
            $last_page_url = $crawler->filter('.pager-last a')->attr('href');
            parse_str(parse_url($last_page_url, PHP_URL_QUERY), $query_params);
            $last_page_number = isset($query_params['page']) ? (int) $query_params['page'] : 0;

            $crawler = $this->authenticate("https://opengameart.org/" . $last_page_url, null);

            $total_comments = ($last_page_number * 50) + (int) $crawler->filter('#comments .comment')->count();
        }
        // TODO: Check if there's a comments available, if there's comments, count the comments in the page, if not, return 0
        else {
            $total_comments = (int) $crawler->filter('#comments .comment')->count();
        }

        return (int) $total_comments;
    }

    // SECTION TAGS
    private function scrapeAllTagsAndStore(Crawler $crawler): array {
        $tags = $crawler->filter('.field-name-field-art-tags .field-items .field-item a')
            ->each(function (Crawler $node) {
                return [
                    'name' => trim($node->text())
                ];
            });

        $process_tags = [];

        foreach ($tags as $item) {
            $t = Tag::firstOrCreate([
                'name' => $item['name']
            ]);

            $process_tags[] = $t->id;
        }

        return $process_tags;
    }

    // SECTION TOTAL FAVORITES
    private function scrapeTotalFavorites(Crawler $crawler): int {
        try {
            return (int) $crawler->filterXPath("//div[@id='block-system-main']/div[1]/div[1]/div[2]/div[7]/div[2]/div[1]")->text();
        } catch (Exception $e) {
        }
        return 0;
    }

    // SECTION: ART'S AUTHOR
    private function getAuthor(Crawler $crawler, string | null $token): int | null {
        $url_username = null;
        $username = null;
        // NOTE: If author
        if ($crawler->filter('div#block-system-main>div>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div>strong>a')->count() > 0) {
            $url_username = preg_replace(
                '#^/users/#',
                '',
                $crawler->filter('div#block-system-main>div>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div>strong>a')->attr('href')
            );
            $username = $crawler->filter('div#block-system-main>div>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div>strong>a')->text();
            // NOTE: if not author (art created by collection owner)
        } else {
            // FIXME: Author does have anonymous (no links)
            // FIXME: Allow art without author (anonymous), make it null, if found null name as a "anonymous"
            if ($crawler->filterXPath("(//div[@class='field-item even'])[2]/span/a")->count() > 0) {
                $url_username = preg_replace('#^/users/#', '', $crawler->filterXPath("(//div[@class='field-item even'])[2]/span/a")->attr('href'));
                $username = $crawler->filterXPath("(//div[@class='field-item even'])[2]/span/a")->text();
            }
        }

        if ($url_username !== null || $username !== null) {
            if (User::where('url_username', $url_username)->exists()) {
                return User::where('url_username', $url_username)->first()->id;
            } else {
                return $this->scrapeUserAndStore($url_username, $username, $token)->id;
            }
        }
        return null;
    }



    public function index(Request $req) {
        $req->validate([
            'search' => 'nullable|string|min:3',
            'page' => 'nullable|numeric',
            'field_art_type_tid' => ['required']
        ]);

        $art_types = ArtType::get();
        $art_types_id = $art_types->pluck('id')->toArray();

        $params = [
            'keys' => $req->search,
            'title' => '',
            'field_art_tags_tid_op' => 'or',
            'field_art_tags_tid' => '',
            'name' => '',
            'field_art_type_tid' => $req->integer('field_art_type_tid') === 0 ? $art_types_id : [$req->integer('field_art_type_tid')],
            'field_art_licenses_tid' => [2, 10310, 31772, 17981, 6, 5, 4, 17982, 3],
            'sort_by' => 'score',
            'sort_order' => 'DESC',
            'items_per_page' => 24,
            'Collection' => '',
        ];

        if ($req->page > 1) {
            $params['page'] = $req->page - 1; // page number is based on array
        }

        $query = http_build_query($params);
        $query = preg_replace(
            '/field_art_licenses_tid%5B\d+%5D=/',
            'field_art_licenses_tid%5B%5D=',
            $query
        );
        $query = preg_replace(
            '/field_art_type_tid%5B\d+%5D=/',
            'field_art_type_tid%5B%5D=',
            $query
        );

        $url = "https://opengameart.org/art-search-advanced?" . $query;

        $crawler = $this->authenticate($url, $req->bearerToken(), false);

        $this->scrapeArtTypeAndStore($crawler); // void

        $total_result = 0;
        if ($crawler->filter('.view-display-id-search_art_advanced .view-header')->count() > 0) {
            $total_raw = $crawler->filter('.view-display-id-search_art_advanced .view-header')->text();

            $total_result = (int) explode('of ', $total_raw)[1];
        }

        // NOTE: Checks art if available

        // dd($crawler->filter('')->html());

        $arts = $crawler->filter('.view-display-id-search_art_advanced .view-content .art-previews-inline')->each(function (Crawler $node) {


            $type = 'Art';
            $preview_type = 'image';
            $previews = '';

            $id = str_replace('/content/', '', $node->filter('.view-mode-art_preview .field-name-title .field-items .field-item span a')->attr('href'));

            if (Art::where('id', $id)->exists()) {
                // dd('existing art');
                return Art::where('id', $id)->with(['user', 'art_category', 'art_previews.art_preview_category', 'files', 'art_comments.user'])->first()->toArray();
            }

            // dd('new art ');

            if ($node->filter('.view-mode-art_preview .field-name-field-art-preview .field-items .field-item a img')->count() > 0) {
                $previews = $node->filter('.view-mode-art_preview .field-name-field-art-preview .field-items .field-item a img')->attr('src');
                $preview_type = 'image';
                $type = 'Art';
            } else {
                // Extract audio image and MP3 URL
                $audio_image = $node->filter('.audio-preview .audio-image')->attr('src');
                $audio_mp3_url = $node->filter('.audio-preview .play-button')->attr('data-mp3-url');

                $previews = $audio_mp3_url; // or use $audio_image if you need the thumbnail
                $preview_type = 'audio';
                $type = 'Music';
            }

            return [
                'id' => $id,
                'title' => $node->filter('.view-mode-art_preview .field-name-title .field-items .field-item span a')->text(),
                'user' => [
                    'image_url' => env('APP_URL') . '/images/icon.png'
                ],
                'art_category' => [
                    'name' => $type
                ],
                'art_previews' => [
                    [
                        'url' => $previews,
                        'id' => 1,
                        'art_preview_category' => [
                            'name' => $preview_type,
                        ],
                    ]
                ],
                'art_comments' => [],
                'files' => [],

            ];
        });

        // dd('completed');

        return response()->json(['data' => $arts, 'total_result' => $total_result, 'art_types' => $art_types, 'url' => $url]);

        // https://opengameart.org/art-search-advanced?keys=aaa&title=&field_art_tags_tid_op=or&field_art_tags_tid=&name=&field_art_type_tid%5B%5D=9&field_art_type_tid%5B%5D=10&field_art_type_tid%5B%5D=7273&field_art_type_tid%5B%5D=14&field_art_type_tid%5B%5D=12&field_art_type_tid%5B%5D=13&field_art_type_tid%5B%5D=11&field_art_licenses_tid%5B%5D=2&field_art_licenses_tid%5B%5D=10310&field_art_licenses_tid%5B%5D=31772&field_art_licenses_tid%5B%5D=17981&field_art_licenses_tid%5B%5D=6&field_art_licenses_tid%5B%5D=5&field_art_licenses_tid%5B%5D=4&field_art_licenses_tid%5B%5D=17982&field_art_licenses_tid%5B%5D=3&sort_by=score&sort_order=DESC&items_per_page=48&Collection=

        // Scrape content search result page
        // update database
        // return json


    }

    private function scrapeArtTypeAndStore(Crawler $crawler) {
    }
}

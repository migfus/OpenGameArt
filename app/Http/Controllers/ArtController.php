<?php

namespace App\Http\Controllers;

use App\Models\{Art, ArtCategory, ArtPreview, ArtPreviewCategory, Tag, User, ArtComment, Collection};

use Carbon\Carbon;
use Exception;
use Illuminate\Http\{JsonResponse, Request};
use Symfony\Component\DomCrawler\Crawler;

class ArtController extends Controller {

    public function store(Request $req): JsonResponse {
        $req->validate([
            'id' => ['required']
        ]);

        /* FIXME
            TO ME:
                Please organize the code, it looks like shit.
        */

        // dd();

        $crawler = $this->authenticate("https://opengameart.org/content/{$req->id}", $req->bearerToken());

        $art_category_name = $crawler->filterXPath("//a[@property='rdfs:label skos:prefLabel']")->text();

        $url_username = '';

        // Check if user exists, if not create
        if ($crawler->filter('div#block-system-main>div>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div>strong>a')->count() > 0) {
            $url_username = preg_replace(
                '#^/users/#',
                '',
                $crawler->filter('div#block-system-main>div>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div>strong>a')->attr('href')
            );
        } else {
            $url_username = preg_replace('#^/users/#', '', $crawler->filterXPath("(//div[@class='field-item even'])[2]/span/a")->attr('href'));
        }

        $art = [
            'created_at' => Carbon::createFromFormat('l, F j, Y - H:i', $crawler->filterXPath("(//div[@class='field-item even'])[3]")->text())->format('Y-m-d H:i:s'),
            'url_username' => $url_username,
            'title' => $crawler->filterXPath("//div[@property='dc:title']//h2[1]")->text(),
            'content' => $crawler->filterXPath("//div[@class='group-right right-column']/div[2]")->html(),
            'files' => $this->getDownloadCounts($crawler),
            'art_category_name' => $art_category_name,
            'preview_files_content' => $art_category_name == 'Music' || $art_category_name == 'Sound Effect' ?
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
                }),
            'favorites_count' => 0
        ];


        $tags_id = $this->processTags($crawler);

        try {
            $art['favorites_count'] = (int) $crawler->filterXPath("//div[@id='block-system-main']/div[1]/div[1]/div[2]/div[7]/div[2]/div[1]")->text();
        } catch (Exception $e) {
        }

        $recent_collection = [];


        if (User::where('url_username', $art['url_username'])->exists()) {
            $user_id = (int) User::where('url_username', $art['url_username'])->first()->id;

            $recent_collection = $this->saveToDatabase($req->id, $art, $tags_id, $user_id, $req->bearerToken(), $crawler);
        } else {
            $user_id = (int) $this->extractUser($art['url_username'], $req);

            $recent_collection = $this->saveToDatabase($req->id, $art, $tags_id, $user_id,  $req->bearerToken(), $crawler);
        }

        return response()->json($recent_collection->load(['user', 'art_category', 'art_previews.art_preview_category', 'files', 'art_comments.user', 'tags']));
    }

    private function processTags($crawler): void {
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
    }

    private function saveArtPreviews(string $art_id, array $previews): void {
        foreach ($previews as $item) {
            ArtPreview::createOrFirst([
                'art_id' => $art_id,
                'url' => $item['url'],
                'art_preview_category_id' => $item['art_preview_category_id']
            ]);
        }
    }

    private function getDownloadCounts($crawler): array {
        return $crawler->filter(".field-name-field-art-files .field-items .field-item")->each(function (Crawler $node) {
            // dd($node->filter('a')->text());

            return [
                'name' => $node->filter('a')->text(),
                'file_url' => $node->filter('a')->attr('href'),
                'download_count' => $node->filter('.dlcount .dlcount-number')->text(),
            ];
        });
    }

    private function getLatestOnlyComment(Crawler $crawler, string $art_id, string | null $token): array {
        $comments = $crawler->filter('#comments .comment')->each(function (Crawler $node) {
            return [
                'content' => $node->filter('.group-right .field .field-items')->html(),
                'url_username' => str_replace('/users/', '', $node->filter('.group-left span a')->attr('href')),
                'created_at' => Carbon::createFromFormat('m/d/Y - H:i', $node->filter('.group-left .field-name-post-date .field-items .field-item')->text())->format('Y-m-d H:i:s'),
            ];
        });

        foreach ($comments as $item) {
            if (!User::where('url_username', $item['url_username'])->exists()) {
                $this->extractUser($item['url_username'], $token);
            }

            ArtComment::create([
                'content' => $item['content'],
                'art_id' => $art_id,
                'user_id' => User::where('url_username', $item['url_username'])->first()->id,
                'created_at' => $item['created_at']
            ]);
        }

        return [];



        /* TODO
            Check for comment's pagination
                If found pagination
                    Get Last Pagination
                        Get Latest Comment
                        Compute (Pagination * comments)
                            1 pagination = 50 comments
                Else If found any comments
                    Get last comments
                        Get last comments
                        Count all comments
                Else no comments found
                    Returns nothing
        */
    }



    private function saveToDatabase($id, $art, $tags_id, int $user_id, string | null $token, Crawler  $crawler) {
        $art_category = ArtCategory::firstOrCreate([
            'name' => $art['art_category_name']
        ]);

        $art_db = Art::firstOrCreate([
            'id' => $id,
            'title' => $art['title'],
            'content' => $art['content'],
            'user_id' => $user_id,
            'art_category_id' => $art_category->id,
            'favorites_count' => $art['favorites_count'],
            'created_at' => $art['created_at'],
        ]);

        $art_db->tags()->sync($tags_id);

        $this->getLatestOnlyComment($crawler, $art_db->id, $token);


        foreach ($art['files'] as $file) {
            $art_db->files()->firstOrCreate($file);
        }

        $this->saveArtPreviews($id, $art['preview_files_content']);

        return $art_db;
    }
}

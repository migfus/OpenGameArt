<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\{Art, ArtCategory, ArtPreview, ArtPreviewCategory, Tag, User, ArtComment};
use Carbon\Carbon;

use Exception;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class ArtController extends Controller {

    public function store(Request $req) {
        $req->validate([
            'id' => ['required']
        ]);

        /* FIXME
            TO ME:
                Please organize the code, it looks like shit.
        */

        // dd();

        $crawler = $this->authenticate("https://opengameart.org/content/{$req->id}");

        $art_category_name = $crawler->filterXPath("//a[@property='rdfs:label skos:prefLabel']")->text();

        $art = [
            'created_at' => Carbon::createFromFormat('l, F j, Y - H:i', $crawler->filterXPath("(//div[@class='field-item even'])[3]")->text())->format('Y-m-d H:i:s'),
            'user_id' => preg_replace('#^/users/#', '', $crawler->filterXPath("(//div[@class='field-item even'])[2]/span/a")->attr('href')),
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

        // Check if user exists, if not create
        if (User::where('id', $art['user_id'])->exists()) {
            $recent_collection = $this->saveToDatabase($req->id, $art, $tags_id, $crawler);
        } else {
            $this->getUser($art['user_id']);

            $recent_collection = $this->saveToDatabase($req->id, $art, $tags_id, $crawler);
        }

        return response()->json($recent_collection->load(['user', 'art_category', 'art_previews.art_preview_category', 'files', 'art_comments.user']));
    }

    private function processTags($crawler) {
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

    private function saveArtPreviews(string $art_id, array $previews) {
        foreach ($previews as $item) {
            ArtPreview::createOrFirst([
                'art_id' => $art_id,
                'url' => $item['url'],
                'art_preview_category_id' => $item['art_preview_category_id']
            ]);
        }
    }

    private function getDownloadCounts($crawler) {
        return $crawler->filter(".field-name-field-art-files .field-items .field-item")->each(function (Crawler $node) {
            // dd($node->filter('a')->text());

            return [
                'name' => $node->filter('a')->text(),
                'file_url' => $node->filter('a')->attr('href'),
                'download_count' => $node->filter('.dlcount .dlcount-number')->text(),
            ];
        });
    }

    private function getLatestOnlyComment(Crawler $crawler, string $art_id) {
        $comments = $crawler->filter('#comments .comment')->each(function (Crawler $node) {
            return [
                'content' => $node->filter('.group-right .field .field-items')->html(),
                'user_id' => str_replace('/users/', '', $node->filter('.group-left span a')->attr('href')),
                'created_at' => Carbon::createFromFormat('m/d/Y - H:i', $node->filter('.group-left .field-name-post-date .field-items .field-item')->text())->format('Y-m-d H:i:s'),
            ];
        });

        foreach ($comments as $item) {
            if (!User::where('id', $item['user_id'])->exists()) {
                $this->getUser($item['user_id']);
            }
            ArtComment::create([
                'content' => $item['content'],
                'art_id' => $art_id,
                'user_id' => $item['user_id'],
                'created_at' => $item['created_at']
            ]);
        }



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



    private function saveToDatabase($id, $art, $tags_id, Crawler  $crawler) {
        $art_category = ArtCategory::firstOrCreate([
            'name' => $art['art_category_name']
        ]);

        $art_db = Art::firstOrCreate([
            'id' => $id,
            'title' => $art['title'],
            'content' => $art['content'],
            'user_id' => $art['user_id'],
            'art_category_id' => $art_category->id,
            'favorites_count' => $art['favorites_count'],
            'created_at' => $art['created_at'],
        ]);

        $art_db->tags()->sync($tags_id);

        $this->getLatestOnlyComment($crawler, $art_db->id);


        foreach ($art['files'] as $file) {
            $art_db->files()->firstOrCreate($file);
        }

        $this->saveArtPreviews($id, $art['preview_files_content']);

        return $art_db;
    }

    private function getUser(string $user_id): string {
        // Scrape for user based on recent_collection
        $crawler = $this->authenticate("https://opengameart.org/users/" . $user_id);

        $username = $crawler->filter('.username')->text();
        $image_url = $crawler->filterXPath("//img[@typeof='foaf:Image']")->attr('src');

        $user = User::createOrFirst([
            'id' => $user_id,
            'username' => $username,
            'image_url' => $image_url
        ]);

        return $user->id;
    }
}

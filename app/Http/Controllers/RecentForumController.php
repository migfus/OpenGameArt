<?php

namespace App\Http\Controllers;

use App\Models\RecentForum;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class RecentForumController extends Controller {
    public function store(Request $req) {
        $req->validate([
            'id' => ['required']
        ]);

        // Scrape for forum
        $body = Http::timeout(10)->get("https://opengameart.org/forumtopic/{$req->id}")->body();
        $crawler = new Crawler($body);

        $content = $crawler->filterXPath("//div[@class='group-right right-column']/div[1]/div[1]/div[1]")->html();

        $raw_date = $crawler->filterXPath("//div[@id='block-system-main']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]")->text();

        $created_at = Carbon::createFromFormat('l, F j, Y - H:i', $raw_date)->format('Y-m-d H:i:s');

        $url_username = str_replace('/users/', '', $crawler->filterXPath("//a[@class='username']")->attr('href'));

        $title = $crawler->filterXPath("//div[@property='dc:title']//h2[1]")->text();

        $recent_forum = [];

        // Check if user exists, if not create
        if (User::where('url_username', $url_username)->exists()) {
            $user_id = User::where('url_username', $url_username)->first()->id;

            $recent_forum = RecentForum::create([
                'id' => $req->id,
                'title' => $title,
                'user_id' => $user_id,
                'content' => $content,
                'created_at' => $created_at
            ]);
        } else {
            // Scrape for user based on recent_collection
            $user_id = $this->extractUser($url_username, $req->bearerToken());

            $recent_forum = RecentForum::create([
                'id' => $req->id,
                'title' => $title,
                'user_id' => $user_id,
                'content' => $content,
                'created_at' => $created_at
            ]);
        }

        return response()->json($recent_forum->load('user'));
    }
}

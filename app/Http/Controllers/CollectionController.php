<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CollectionController extends Controller {
    public function store(Request $req) {
        $req->validate([
            'id' => ['required']
        ]);

        $crawler = $this->authenticate("https://opengameart.org/content/{$req->id}", $req->bearerToken());

        $raw_date = $crawler->filterXPath("//div[@class='field-item even']")->eq(2)->text();
        $created_at = Carbon::createFromFormat('l, F j, Y - H:i', $raw_date)->format('Y-m-d H:i:s');

        $url_username = str_replace('/users/', '',  $crawler->filterXPath("//a[@class='username']")->attr('href'));

        $title = $crawler->filterXPath("//div[@property='dc:title']//h2[1]")->text();
        $content = $crawler->filterXPath("//div[@property='content:encoded']")->html();

        $recent_collection = [];

        // Check if user exists, if not create
        if (User::where('url_username', $url_username)->exists()) {
            $user_id = User::where('url_username', $url_username)->first()->id;

            $recent_collection = Collection::create([
                'id' => $req->id,
                'title' => $title,
                'content' => $content,
                'user_id' => $user_id,
                'created_at' => $created_at
            ]);
        } else {

            $user_id = $this->extractUser($url_username, $req->bearerToken());

            $recent_collection = Collection::create([
                'id' => $req->id,
                'user_id' => $user_id,
                'title' => $title,
                'content' => $content,
                'created_at' => $created_at
            ]);
        }

        return response()->json($recent_collection->load('user'));
    }
}

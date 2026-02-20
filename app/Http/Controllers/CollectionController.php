<?php

namespace App\Http\Controllers;

use App\Models\{Collection, User};

use Carbon\Carbon;
use Illuminate\Http\{JsonResponse, Request};

class CollectionController extends Controller {
    public function update(Request $req, string $id): JsonResponse {
        $crawler = $this->authenticate("https://opengameart.org/content/{$id}", $req->bearerToken());

        $url_username = str_replace('/users/', '', $crawler->filterXPath("//a[@class='username']")->attr('href'));
        $username = $crawler->filterXPath("//a[@class='username']")->text();
        $forum = [

            'title' => $crawler->filterXPath("//div[@property='dc:title']//h2[1]")->text(),
            'content' => $crawler->filterXPath("//div[@class='group-right right-column']/div[2]")->html(),
            'user_id' => User::where('url_username', $url_username)->exists() ?
                User::where('url_username', $url_username)->first()->id :
                $this->scrapeUserAndStore($url_username, $username, $req->bearerToken())->id,
            'created_at' =>
            Carbon::createFromFormat(
                'l, F j, Y - H:i',
                $crawler->filterXPath("//div[@class='field-item even']")->eq(2)->text()
            )->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ];

        $recent_collection = Collection::updateOrCreate([
            'id' => $id
        ], $forum);

        return response()->json($recent_collection->load('user'));
    }
}

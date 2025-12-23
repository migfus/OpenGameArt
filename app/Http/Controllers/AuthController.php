<?php

namespace App\Http\Controllers;

use App\Models\{
    ArtPreview,
    ArtPreviewCategory,
    UserSession
};
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

class AuthController extends Controller {
    public function login(Request $req) {
        $req->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        $cookieJar = new CookieJar();

        $client = new Client([
            'cookies' => $cookieJar,
            'allow_redirects' => true,
            'headers' => [
                'User-Agent' => 'Mozilla/5.0',
            ],
        ]);

        $response = $client->get('https://opengameart.org');
        $crawler = new Crawler($response->getBody());

        $html = $client->post('https://opengameart.org/node', [
            'form_params' => [
                'destination' => 'node',
                'name' => $req->string("username"),
                'pass' => $req->string('password'),
                'form_id' =>  $crawler->filter('input[name="form_id"]')->attr('value'),
                'openid_return_to' => 'https://opengameart.org/openid/authenticate?destination=node',
                'form_build_id' => $crawler->filter('input[type="hidden"][name="form_build_id"]')->attr('value')
            ],
        ])->getBody();

        $crawler = new Crawler($html);
        return $crawler->html();

        // ✅
        $user_session = [];

        dd($cookieJar->toArray());

        foreach ($cookieJar->toArray() as $cookie) {

            dd('existed');
            $user_session = UserSession::create([
                'name'     => $cookie['Name'],
                'value'    => $cookie['Value'],
                'domain'   => $cookie['Domain'],
                'path'     => $cookie['Path'],
                'secure'   => $cookie['Secure'],
                'http_only' => $cookie['HttpOnly'],
                'expires'  => $cookie['Expires'],
            ]);
        }

        dd($user_session);

        $data['token'] = $user_session->id;

        return response()->json([
            'token' => $user_session->id
        ]);


        // Scrape user id

        $crawler = $this->authenticate('https://opengameart.org/');

        $user_id = $crawler->filterXPath("//div[@id='block-oga-hello']/div[1]")->html();

        dd($user_id);


        return response()->json($data);
    }

    public function artPreviews() {
        $art_preview_category_id = ArtPreviewCategory::where('name', 'image')->first()->id;
        $art_previews = ArtPreview::where('art_preview_category_id', $art_preview_category_id)->inRandomOrder()->limit(100)->get();

        return response()->json($art_previews);
    }
}

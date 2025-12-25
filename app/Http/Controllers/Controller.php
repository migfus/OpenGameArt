<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserSession;
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

abstract class Controller {

    public function authenticate(string $html, $token): Crawler {
        $cookies = UserSession::where('id', $token)->get();

        $cookieArray = [];

        foreach ($cookies as $cookie) {
            $cookieArray[$cookie->name] = $cookie->value;
        }

        $cookieJar = CookieJar::fromArray($cookieArray, 'opengameart.org');

        $client = new Client([
            'cookies' => $cookieJar,
            'allow_redirects' => true,
            'headers' => ['User-Agent' => 'Mozilla/5.0'],
        ]);

        $response = $client->get($html);
        $html = (string) $response->getBody();

        $crawler = new Crawler($html);

        return $crawler;
    }

    public function extractUser(string $url_username, $token): int {
        // Scrape for user based on recent_collection
        $crawler = $this->authenticate("https://opengameart.org/users/" . $url_username, $token);

        $username = $crawler->filter('.username')->text();
        $user_id = str_replace('/collections', '', str_replace('/user/', '', $crawler->filter('div#right>div>ul>li:nth-of-type(2)>a')->attr('href')));
        // dd($id);
        $image_url = $crawler->filterXPath("//img[@typeof='foaf:Image']")->attr('src');

        $user = User::createOrFirst([
            'id' => $user_id,
            'url_username' => $url_username,
            'username' => $username,
            'image_url' => $image_url
        ]);

        return (int) $user->id;
    }
}

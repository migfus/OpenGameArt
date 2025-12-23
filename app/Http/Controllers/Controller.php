<?php

namespace App\Http\Controllers;

use App\Models\UserSession;
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;
use Symfony\Component\DomCrawler\Crawler;

abstract class Controller {

    public function authenticate(string $html): Crawler {
        $cookies = UserSession::where('id', '01kd2fe6a6nchx2yk78dcf3bkq')->get();

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

        // dd($html);
        $crawler = new Crawler($html);

        return $crawler;
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Affiliate;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class AffiliateController extends Controller {

    public function update(Request $req): array {
        // STUB Vulnerability? 🤣
        // STUB accepts any id (url), what could go wrong?
        $req->validate([
            'title' => ['required'],
            'id' => ['required']
        ]);

        # Scrape for forum
        $body = Http::timeout(10)->get($req->id)->body();
        $crawler = new Crawler($body);

        $image_url = $this->scrapesAllPossibleIcon($crawler);


        $affiliate = Affiliate::updateOrCreate([
            'id' => $req->id
        ], [
            'title' => $req->title,
            'image_url' => $image_url,
            'created_at' => now()->format('Y-m-d H:i:s'),
            'updated_at' => now()->format('Y-m-d H:i:s')
        ]);

        return $affiliate->toArray();

        return [];
    }

    private function scrapesAllPossibleIcon($crawler): string | null {
        $selectors = [
            'link[rel="icon"]',
            'link[rel="shortcut icon"]',
            'link[rel="apple-touch-icon"]',
            'link[rel="apple-touch-icon-precomposed"]',
            'meta[property="og:image"]',
            'meta[name="msapplication-TileImage"]'
        ];

        foreach ($selectors as $selector) {
            $node = $crawler->filter($selector);

            if ($node->count() > 0) {
                $icon_url = $node->first()->attr('href') ?? $node->first()->attr('content');

                return $icon_url;
            }
        }

        return null;
    }
}

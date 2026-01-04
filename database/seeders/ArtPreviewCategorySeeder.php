<?php

namespace Database\Seeders;

use App\Models\ArtPreviewCategory;
use Illuminate\Database\Seeder;

class ArtPreviewCategorySeeder extends Seeder {

    public function run(): void {
        $data = [
            [
                'name' => 'audio'
            ],
            [
                'name' => 'image'
            ]
        ];

        foreach ($data as $item) {
            ArtPreviewCategory::create($item);
        }
    }
}

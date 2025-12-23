<?php

namespace Database\Seeders;

use App\Models\ArtPreviewCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArtPreviewCategorySeeder extends Seeder {
    /**
     * Run the database seeds.
     */
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

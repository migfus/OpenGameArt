<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\ArtType;

class ArtTypeSeeder extends Seeder {
    public function run(): void {
        $data = [
            [
                'id' => 9,
                'name' => '2D Art',
                'icon' => 'pixelarticons:image-sharp',
            ],
            [
                'id' => 10,
                'name' => '3D Art',
                'icon' => 'pixelarticons:spline-cursor',
            ],
            [
                'id' => 7273,
                'name' => 'Concept Art',
                'icon' => 'pixelarticons:lightbulb'
            ],
            [
                'id' => 14,
                'name' => 'Texture',
                'icon' => 'pixelarticons:wall',
            ],
            [
                'id' => 12,
                'name' => 'Music',
                'icon' => 'pixelarticons:music',
            ],
            [
                'id' => 13,
                'name' => 'Sound Effect',
                'icon' => 'pixelarticons:sparkles',
            ],
            [
                'id' => 11,
                'name' => 'Documents',
                'icon' => 'pixelarticons:menu-square',
            ],
        ];

        foreach ($data as $item) {
            ArtType::create($item);
        }
    }
}

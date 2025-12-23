<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('art_previews', function (Blueprint $table) {
            $table->id();

            $table->string('art_id');
            $table->foreign('art_id')
                ->references('id')
                ->on('arts')
                ->onDelete('cascade');

            $table->foreignId('art_preview_category_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();

            $table->longText('url')->unique();
            $table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('art_previews');
    }
};

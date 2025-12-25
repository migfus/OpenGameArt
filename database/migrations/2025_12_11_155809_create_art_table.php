<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('arts', function (Blueprint $table) {
            $table->string('id')->primary();

            $table->foreignId('user_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('art_category_id')->constrained('art_categories')->cascadeOnUpdate()->cascadeOnDelete();

            $table->string('title');
            $table->longText('content')->nullable();
            $table->unsignedInteger('favorites_count')->default(0);

            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('arts');
    }
};

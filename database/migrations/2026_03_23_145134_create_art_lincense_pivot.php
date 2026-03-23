<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('art_license', function (Blueprint $table) {
            $table->id();
            $table->string('art_id');
            $table->foreign('art_id')
                ->references('id')
                ->on('arts')
                ->onDelete('cascade');

            $table->foreignId('license_id')->constrained('licenses')->cascadeOnUpdate()->cascadeOnDelete();

            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('art_license');
    }
};

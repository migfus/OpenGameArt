<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArtPreview extends Model {
    protected $fillable  = ['id', 'art_id',  'url', 'art_preview_category_id'];

    public function art_preview_category() {
        return $this->belongsTo(ArtPreviewCategory::class);
    }
}

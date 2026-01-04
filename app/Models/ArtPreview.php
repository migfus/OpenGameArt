<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ArtPreview extends Model {
    protected $fillable  = ['id', 'art_id',  'url', 'art_preview_category_id'];

    public function art_preview_category(): BelongsTo {
        return $this->belongsTo(ArtPreviewCategory::class);
    }
}

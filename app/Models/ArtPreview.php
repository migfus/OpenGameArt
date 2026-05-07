<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $art_id
 * @property int $art_preview_category_id
 * @property string $url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\ArtPreviewCategory $art_preview_category
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview whereArtId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview whereArtPreviewCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtPreview whereUrl($value)
 * @mixin \Eloquent
 */
class ArtPreview extends Model {
    protected $fillable  = ['id', 'art_id',  'url', 'art_preview_category_id'];

    public function art_preview_category(): BelongsTo {
        return $this->belongsTo(ArtPreviewCategory::class);
    }
}

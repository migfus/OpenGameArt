<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{
    BelongsTo,
    BelongsToMany,
    HasMany
};

class Art extends Model {
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'arts';

    protected $fillable  = [
        'id',
        'user_id',
        'title',
        'created_at',
        'content',
        'art_category_id',
        'favorites_count',
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function art_category(): BelongsTo {
        return $this->belongsTo(ArtCategory::class);
    }

    public function tags(): BelongsToMany {
        return $this->belongsToMany(Tag::class);
    }

    public function art_previews(): HasMany {
        return $this->hasMany(ArtPreview::class);
    }

    public function files(): HasMany {
        return $this->hasMany(File::class);
    }

    public function art_comments(): HasMany {
        return $this->hasMany(ArtComment::class);
    }
}

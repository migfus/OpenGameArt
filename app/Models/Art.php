<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function art_category() {
        return $this->belongsTo(ArtCategory::class);
    }

    public function tags() {
        return $this->belongsToMany(Tag::class);
    }

    public function art_previews() {
        return $this->hasMany(ArtPreview::class);
    }

    public function files() {
        return $this->hasMany(File::class);
    }

    public function art_comments() {
        return $this->hasMany(ArtComment::class);
    }
}

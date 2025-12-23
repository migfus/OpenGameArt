<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArtComment extends Model {
    protected $fillable = ['user_id', 'art_id', 'content'];

    public function art() {
        return $this->belongsTo(Art::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}

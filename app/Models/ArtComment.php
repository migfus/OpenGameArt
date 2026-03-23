<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ArtComment extends Model {
    protected $fillable = ['user_id', 'art_id', 'content', 'created_at'];

    public function art(): BelongsTo {
        return $this->belongsTo(Art::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}

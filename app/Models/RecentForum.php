<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RecentForum extends Model {
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable  = ['id', 'user_id',  'title', 'created_at', 'content', 'updated_at'];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}

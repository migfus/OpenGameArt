<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;

class UserSession extends Model {
    use HasUlids;

    protected $fillable = ['name', 'value', 'domain', 'path', 'secure', 'http_only', 'expires', 'user_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class License extends Model {
    protected $fillable = [
        'id',
        'name',
        'url',
        'created_at'
    ];

    public function arts() {
        return $this->belongsToMany(Art::class);
    }
}

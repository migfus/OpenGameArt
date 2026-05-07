<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostPreview newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostPreview newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostPreview query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostPreview whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostPreview whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostPreview whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class PostPreview extends Model {
    protected $fillable  = ['id', 'art_id',  'preview_url', 'created_at'];
}

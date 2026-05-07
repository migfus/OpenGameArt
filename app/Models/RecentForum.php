<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $id
 * @property int|null $user_id
 * @property string $title
 * @property string|null $content
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RecentForum whereUserId($value)
 * @mixin \Eloquent
 */
class RecentForum extends Model {
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable  = ['id', 'user_id',  'title', 'created_at', 'content', 'updated_at'];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}

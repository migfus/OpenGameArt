<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int|null $user_id
 * @property string $art_id
 * @property string $content
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Art $art
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment whereArtId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtComment whereUserId($value)
 * @mixin \Eloquent
 */
class ArtComment extends Model {
    protected $fillable = ['user_id', 'art_id', 'content', 'created_at'];

    public function art(): BelongsTo {
        return $this->belongsTo(Art::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}

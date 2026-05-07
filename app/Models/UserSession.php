<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $id
 * @property string $name
 * @property string $value
 * @property string $domain
 * @property string $path
 * @property string $secure
 * @property string $http_only
 * @property string $expires
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereDomain($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereExpires($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereHttpOnly($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereSecure($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserSession whereValue($value)
 * @mixin \Eloquent
 */
class UserSession extends Model {
    use HasUlids;

    protected $fillable = ['name', 'value', 'domain', 'path', 'secure', 'http_only', 'expires', 'user_id'];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}

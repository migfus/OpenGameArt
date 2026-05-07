<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $icon
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtType whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ArtType extends Model {
    protected $fillable = [
        'name'
    ];
}

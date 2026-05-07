<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|ArtCategory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ArtCategory extends Model {

    protected $fillable  = ['id', 'name'];
}

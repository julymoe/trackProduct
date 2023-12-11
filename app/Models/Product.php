<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'category' => 'array',
    ];

    protected $hidden = [
        'user',
    ];

    protected $appends = [
        'manager',
        'last_updated',
    ];

    
    public function user(): BelongsTo
    {
        return $this -> belongsTo(User::class);
    }

    public function getManagerAttribute(): string
    {
        return $this -> user -> name;
    }

    public function getLastUpdatedAttribute(): string
    {
        return $this -> updated_at -> diffForHumans();
    }
}



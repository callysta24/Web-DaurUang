<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WasteCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name',
        'poin_per_kg',
    ];

    public function wastes()
    {
        return $this->hasMany(Waste::class, 'id_wc');
    }
}

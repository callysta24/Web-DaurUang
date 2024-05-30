<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WasteCategories extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name',
        'poin_per_kg'
    ];
}

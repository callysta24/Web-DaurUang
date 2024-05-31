<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waste extends Model
{
    use HasFactory;

    protected $fillable = [
        'pic_waste',
        'merk_product',
        'weight_waste',
        'id_wc',
    ];

    public function wasteCategory()
    {
        return $this->belongsTo(WasteCategory::class, 'id_wc');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waste extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_waste'; // Menggunakan id_waste sebagai primary key
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'pic_waste',
        'merk_product',
        'weight_waste',
        'id_wc', // Pastikan id_wc bisa diisi
    ];


    // Definisikan relasi dengan WasteCategory
    public function wasteCategory()
    {
        return $this->belongsTo(WasteCategory::class, 'id_wc');
    }
}

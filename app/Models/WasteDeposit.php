<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WasteDeposit extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_wd';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'date_deposit',
        'poin_of_deposit',
        'id_customer',
        'id_waste',
    ];


    // Definisikan relasi dengan Waste
    public function waste()
    {
        return $this->belongsTo(Waste::class, 'id_waste');
    }
    // Definisikan relasi dengan Customer
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'id_customer');
    }
}

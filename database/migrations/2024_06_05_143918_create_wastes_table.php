<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('wastes', function (Blueprint $table) {
            $table->id('id_waste');
            $table->string('pic_waste');
            $table->string('merk_product');
            $table->integer('weight_waste');
            $table->unsignedBigInteger('id_wc'); // Pastikan ini unsignedBigInteger
            $table->timestamps();

            // Menambahkan foreign key constraint
            $table->foreign('id_wc')->references('id_wc')->on('waste_categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wastes');
    }
};

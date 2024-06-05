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
        Schema::create('waste_deposits', function (Blueprint $table) {
            $table->id('id_wd');
            $table->string('date_deposit');
            $table->string('poin_of_deposit');
            $table->unsignedBigInteger('id_customer');
            $table->unsignedBigInteger('id_waste');
            $table->timestamps();

            // Menambahkan foreign key constraint
            $table->foreign('id_waste')->references('id_waste')->on('wastes')->onDelete('cascade');
            $table->foreign('id_customer')->references('id_customer')->on('customers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('waste_deposits');
    }
};

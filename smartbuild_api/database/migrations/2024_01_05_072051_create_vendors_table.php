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
        Schema::create('vendors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('VendorName');
            $table->string('VendorEmail')->unique();
            $table->string('VendorContactNo');
            $table->string('VendorAddress')->nullable();
            $table->enum('status', ['Active', 'Inactive'])->default('Active');
            $table->string('ContactPerson')->nullable();
            $table->Integer('Added_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vendors', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};

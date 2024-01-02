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
            $table->id();
            $table->string('VendorName');
            $table->string('VendorEmail')->unique();
            $table->string('VendorContactNo');
            $table->text('VendorAddress');
            $table->enum('Status', ['active', 'inactive'])->default('active');
            $table->string('ContactPerson');
            $table->string('Added_by');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendors');
    }
};

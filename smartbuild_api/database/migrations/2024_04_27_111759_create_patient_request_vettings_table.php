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
        Schema::create('patient_request_vettings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('mrn_number')->nullable();
            $table->unsignedBigInteger('patient_id')->nullable();
            $table->integer('vetting_type_id')->nullable();
            $table->string('vetting_notes')->nullable();
            $table->integer('vetting_by')->nullable();
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->integer('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_request_vettings');
    }
};

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
        Schema::create('patient_vitals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('mrn_number')->nullable();
            $table->integer('patient_id')->nullable();
            $table->string('procedure')->nullable();
            $table->string('accession_no')->nullable();
            $table->integer('added_by')->nullable();
            $table->string('blood_pressure')->nullable();
            $table->string('heart_beat')->nullable();
            $table->string('spO2')->nullable();
            $table->string('respiratory_rate')->nullable();
            $table->string('temperature')->nullable();
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
        Schema::dropIfExists('patient_vitals');
    }
};

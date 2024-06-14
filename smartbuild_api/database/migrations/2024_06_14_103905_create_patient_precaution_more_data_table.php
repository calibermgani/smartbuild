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
        Schema::create('patient_precaution_more_data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('patient_precaution_id')->nullable();
            $table->string('gcs_eye_opening')->nullable();
            $table->string('gcs_verbal_response')->nullable();
            $table->string('gcs_motor_response')->nullable();
            $table->string('contrast_reaction_values')->nullable();
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
        Schema::dropIfExists('patient_precaution_more_data');
    }
};

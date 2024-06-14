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
        Schema::create('patient_precautions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('mrn_number')->nullable();
            $table->integer('patient_id')->nullable();
            $table->string('procedure')->nullable();
            $table->string('accession_no')->nullable();
            $table->integer('added_by')->nullable();
            $table->enum('fall', ['Yes', 'No'])->default('No')->nullable();
            $table->enum('allergy', ['Yes', 'No'])->default('No')->nullable();
            $table->enum('isolation', ['Yes', 'No'])->default('No')->nullable();
            $table->enum('covid', ['Yes', 'No'])->default('No')->nullable();
            $table->enum('gcs', ['Yes', 'No'])->default('No')->nullable();
            $table->enum('pregnant', ['Yes', 'No'])->default('No')->nullable();
            $table->enum('diabetic', ['Yes', 'No'])->default('No')->nullable();
            $table->enum('contrast_reaction', ['Yes', 'No'])->default('No')->nullable();
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
        Schema::dropIfExists('patient_precautions');
    }
};

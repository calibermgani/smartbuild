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
        Schema::create('patients_information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->nullable();
            $table->string('martital_status')->nullable();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('surname')->nullable();
            $table->string('location')->nullable();
            $table->string('age')->nullable();
            $table->date('dob')->nullable();
            $table->string('name_of_partner')->nullable();
            $table->string('name_of_children')->nullable();
            $table->string('referred_by')->nullable();
            $table->string('occupation')->nullable();
            $table->string('gender')->nullable();
            $table->string('telephone')->nullable();
            $table->string('primary_email')->nullable();
            $table->string('address_type')->nullable();
            $table->string('flat_unit_no')->nullable();
            $table->string('street_no')->nullable();
            $table->string('street_name')->nullable();
            $table->string('suburb')->nullable();
            $table->string('town_city')->nullable();
            $table->string('state')->nullable();
            $table->string('post_code')->nullable();
            $table->string('mrn_no')->nullable();
            $table->string('provider_no')->nullable();
            $table->string('patient_type')->nullable();
            $table->string('admission_type')->nullable();
            $table->string('exam_status')->nullable();
            $table->string('study_id')->nullable();
            $table->string('priority')->nullable();
            $table->string('procedure_status')->nullable();
            $table->timestamp('study_date_time')->nullable();
            $table->string('accession_no')->nullable();
            $table->string('requesting_physician')->nullable();
            $table->string('specialty')->nullable();
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
        Schema::dropIfExists('patients_information');
    }
};

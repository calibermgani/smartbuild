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
        Schema::create('patient_labs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('stage_id')->nullable();
            $table->integer('patient_id')->nullable();
            $table->string('procedure')->nullable();
            $table->string('mrn_number')->nullable();
            $table->string('test_name')->nullable();
            $table->string('result')->nullable();
            $table->timestamp('date')->nullable();
            $table->integer('added_by')->nullable();
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
        Schema::dropIfExists('patient_labs');
    }
};

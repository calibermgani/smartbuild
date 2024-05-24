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
        Schema::create('kizin_tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('stage_id');
            $table->integer('patient_id');
            $table->string('mrn_no');
            $table->string('procedure');
            $table->integer('checklist_id');
            $table->date('checklist_date');
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
        Schema::dropIfExists('kizin_tasks');
    }
};

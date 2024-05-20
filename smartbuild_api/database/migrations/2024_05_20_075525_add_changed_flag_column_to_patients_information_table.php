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
        Schema::table('patients_information', function (Blueprint $table) {
            $table->string('changed_flag')->after('patient_source_from')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('patients_information', function (Blueprint $table) {
            $table->dropColumn('changed_flag');
        });
    }
};

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
            $table->string('marital_status')->after('title')->nullable();
            $table->dropColumn('martital_status');
            $table->string('blood_pressure')->nullable()->after('height');
            $table->string('heart_beat')->nullable()->after('blood_pressure');
            $table->string('spo2')->nullable()->after('heart_beat');
            $table->string('respiratory_rate')->nullable()->after('spo2');
            $table->string('temperature')->nullable()->after('respiratory_rate');
            $table->string('critical_information')->nullable()->after('temperature');
            $table->string('notes')->nullable()->after('critical_information');
            $table->string('image')->nullable()->after('notes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('patients_information', function (Blueprint $table) {
            $table->dropColumn('blood_pressure');
            $table->dropColumn('heart_beat');
            $table->dropColumn('spo2');
            $table->dropColumn('respiratory_rate');
            $table->dropColumn('temperature');
            $table->dropColumn('critical_information');
            $table->dropColumn('notes');
            $table->dropColumn('image');
        });
    }
};

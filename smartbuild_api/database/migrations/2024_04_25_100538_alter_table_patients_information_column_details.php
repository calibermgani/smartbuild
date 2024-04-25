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
            $table->string('language')->nullable()->after('specialty');
            $table->string('blood_group')->nullable()->after('language');
            $table->string('weight')->nullable()->after('blood_group');
            $table->string('height')->nullable()->after('weight');
            $table->string('procedure')->nullable()->after('height');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('patients_information', function (Blueprint $table) {
            $table->dropColumn('language');
            $table->dropColumn('blood_group');
            $table->dropColumn('weight');
            $table->dropColumn('height');
            $table->dropColumn('procedure');
        });
    }
};

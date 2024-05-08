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
        Schema::table('patients_requests', function (Blueprint $table) {
            $table->string('reason_note')->nullable()->after('accepted_by');
            $table->string('reason_type')->nullable()->after('reason_note');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('patients_requests', function (Blueprint $table) {
            $table->dropColumn(['reason_note', 'reason_type']);
        });
    }
};

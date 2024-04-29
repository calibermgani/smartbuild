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
        Schema::table('patient_request_protocollings', function (Blueprint $table) {
            $table->string('protocol_details')->nullable();
            $table->integer('add_your_protocol_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('patient_request_protocollings', function (Blueprint $table) {
            $table->dropColumn('protocol_details');
            $table->dropColumn('add_your_protocol_id');
        });
    }
};

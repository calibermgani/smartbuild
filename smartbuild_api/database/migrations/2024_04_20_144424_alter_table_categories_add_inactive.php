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
        Schema::table('categories', function (Blueprint $table) {
            $table->unsignedBigInteger('updated_by')->nullable()->after('added_by');
            $table->unsignedBigInteger('deleted_by')->nullable()->after('updated_by');
            $table->string('deleted_reason')->nullable()->after('deleted_by');
            $table->unsignedBigInteger('inactive_by')->nullable()->after('deleted_reason');
            $table->string('inactive_reason')->nullable()->after('inactive_by');
            $table->date('inactive_date')->nullable()->after('inactive_reason');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('updated_by');
            $table->dropColumn('deleted_by');
            $table->dropColumn('deleted_reason');
            $table->dropColumn('inactive_by');
            $table->dropColumn('inactive_reason');
            $table->dropColumn('inactive_date');
        });
    }
};

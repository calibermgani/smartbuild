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
        Schema::table('items', function (Blueprint $table) {
            $table->string('spid')->after('id')->nullable();
            $table->string('item_entry_status')->after('spid')->nullable();
            $table->boolean('favorite')->after('item_entry_status')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('items', function (Blueprint $table) {
            $table->dropColumn('spid');
            $table->dropColumn('item_entry_status');
            $table->dropColumn('favorite');
        });
    }
};

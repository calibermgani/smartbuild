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
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('item_no')->nullable();
            $table->string('item_name',255);
            $table->string('items_category');
            $table->text('item_description')->nullable();
            $table->text('procedure');
            $table->string('cat_no');
            $table->string('lot_no');
            $table->string('size')->nullable();
            $table->string('vendor')->nullable();
            $table->float('price');
            $table->integer('unit');
            $table->date('expiry_date')->nullable();
            $table->integer('on_hand_qty');
            $table->integer('min_level');
            $table->text('tags')->nullable();
            $table->text('notes')->nullable();
            $table->text('images')->nullable();
            $table->string('barcodes')->nullable();
            $table->softDeletes();
            $table->string('added_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('materials', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};

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
            $table->bigIncrements('id');
            $table->string('item_no')->nullable();
            $table->string('item_name', 255);
            $table->unsignedBigInteger('items_category'); 
            $table->text('item_description')->nullable();
            $table->text('procedure');
            $table->string('cat_no');
            $table->string('lot_no');
            $table->unsignedBigInteger('size')->nullable(); 
            $table->unsignedBigInteger('vendor')->nullable(); 
            $table->float('price');
            $table->unsignedBigInteger('unit')->nullable(); 
            $table->date('expiry_date')->nullable();
            $table->integer('on_hand_qty');
            $table->integer('min_level');
            $table->text('tags')->nullable();
            $table->text('notes')->nullable();
            $table->text('images')->nullable();
            $table->string('barcodes')->nullable();
            $table->enum('status', ['Active', 'Inactive'])->default('Active');
            $table->softDeletes();
            $table->Integer('added_by');
            $table->timestamps();
    
            // Foreign key constraints
            $table->foreign('items_category')->references('id')->on('categories');
            $table->foreign('size')->references('id')->on('sizes');
            $table->foreign('vendor')->references('id')->on('vendors');
            $table->foreign('unit')->references('id')->on('units');
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

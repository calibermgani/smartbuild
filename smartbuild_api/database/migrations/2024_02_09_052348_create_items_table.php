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
        Schema::create('items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('item_number');
            $table->string('item_name');
            $table->integer('item_category')->nullable();
            $table->integer('item_sub_category')->nullable();
            $table->string('item_barcode')->nullable();
            $table->integer('item_procedure')->nullable();
            $table->integer('item_status')->nullable();
            $table->integer('vendor')->nullable();
            $table->float('price')->nullable();
            $table->integer('size')->nullable();
            $table->string('size_type',100)->nullable();
            $table->string('unit',100)->nullable();
            $table->integer('cabinet_A_qty')->nullable();
            $table->integer('cabinet_B_qty')->nullable();
            $table->date('expired_date')->nullable();
            $table->integer('min_level')->nullable();
            $table->string('cat_no')->nullable();
            $table->string('lot_no')->nullable();
            $table->string('item_description')->nullable();
            $table->string('item_notes')->nullable();
            $table->string('tag')->nullable();
            $table->enum('status',['Active','Inactive'])->default('Active');
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
        Schema::dropIfExists('items');
    }
};

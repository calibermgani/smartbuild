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
            $table->id();
            $table->string('item_number');
            $table->string('item_name');
            $table->unsignedBigInteger('item_category_id')->nullable();
            $table->unsignedBigInteger('item_sub_category_id')->nullable();
            $table->string('item_barcode')->nullable();
            $table->unsignedBigInteger('item_procedure_id')->nullable();
            $table->enum('item_status', ['1', '2'])->default('1')->comment('1-Active 2-Inactive');
            $table->unsignedBigInteger('vendor_id')->nullable();
            $table->double('price', 8, 2)->nullable();
            $table->integer('size')->nullable();
            $table->string('size_type', 100)->nullable();
            $table->integer('store_qty')->nullable();
            $table->integer('cabinet_qty')->nullable();
            $table->date('expired_date')->nullable();
            $table->integer('min_level')->nullable();
            $table->string('cat_no')->nullable();
            $table->string('lot_no')->nullable();
            $table->string('item_description')->nullable();
            $table->string('item_notes')->nullable();
            $table->string('tag')->nullable();
            $table->string('image_url')->nullable();
            $table->integer('unit')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
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

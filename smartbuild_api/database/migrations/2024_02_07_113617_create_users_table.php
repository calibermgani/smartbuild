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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('short_name')->nullable();
            $table->string('email',100)->nullable();
            $table->string('password',100)->nullable();
            $table->string('firstname',100)->nullable();
            $table->string('lastname',100)->nullable();
            $table->date('dob')->nullable();
            $table->enum('gender',['Male','FeMale'])->nullable();
            $table->integer('designation')->nullable();
            $table->enum('status',['Active','Inactive'])->default('Active');
            $table->string('department',100)->nullable();
            $table->string('addressline1',50)->nullable();
            $table->string('addressline2',50)->nullable();
            $table->integer('city')->nullable();
            $table->integer('state')->nullable();
            $table->string('zipcode',5)->nullable();
            $table->string('phone',20)->nullable();
            $table->string('fax',20)->nullable();
            $table->string('user_image',100)->nullable();
            $table->unsignedBigInteger('role_id');
            $table->integer('created_by')->nullable();
            $table->integer('updated_by')->nullable();
            $table->integer('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

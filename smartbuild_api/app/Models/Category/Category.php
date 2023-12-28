<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'category_shortcode',
        'status',
        'added_by',
       
    ];

    public static $rules = [
        'CategoryName' => 'required',
        'Category_shortcode' => 'required',
       
    ];
}

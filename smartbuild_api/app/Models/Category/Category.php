<?php

namespace App\Models\Category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'name',
        'category_shortcode',
        'status',
        'added_by',
       
    ];

    public static $rules = [
        'name' => 'required',
        'category_shortcode' => 'required',
       
    ];
}

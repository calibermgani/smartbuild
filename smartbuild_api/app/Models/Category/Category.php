<?php

namespace App\Models\Category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;

class Category extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'categories';

    protected $fillable = [
        'name',
        'category_shortcode',
        'status',
        'added_by',

    ];

    public static function rules($id = null)
    {
        return [
            'name' => [
                'required',
                Rule::unique('categories', 'name')->whereNull('deleted_at')->ignore($id),
            ],
            'category_shortcode' => [
                'required',
                Rule::unique('categories', 'category_shortcode')->whereNull('deleted_at')->ignore($id),
            ],
        ];
    }
}

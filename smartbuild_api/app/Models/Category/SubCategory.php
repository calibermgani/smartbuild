<?php

namespace App\Models\Category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;

class SubCategory extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'sub_categories';

    protected $fillable = [
        'category_id',
        'sub_category_name',
        'status',
        'created_by',
        'updated_by',
        'deleted_by',
    ];

    public static function rules($id = null)
    {
        return [
            'sub_category_name' => [
                'required',
                Rule::unique('sub_categories', 'sub_category_name')->whereNull('deleted_at')->ignore($id),
            ],
        ];
    }
}

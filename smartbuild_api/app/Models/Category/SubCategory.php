<?php

namespace App\Models\Category;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasOne;
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

    public static function rules($id = null, $categoryId)
    {
        return [
            'sub_category_name' => [
                'required',
                Rule::unique('sub_categories', 'sub_category_name')
                    ->whereNull('deleted_at')
                    ->where('category_id', $categoryId)
                    ->ignore($id),
            ],
        ];
    }
    public function category(): HasOne
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }
}

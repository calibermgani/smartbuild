<?php

namespace App\Models\Category;

use App\Models\Item\Item;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Category\SubCategory;

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
    public function sub_category(): HasMany
    {
        return $this->hasMany(SubCategory::class, 'category_id', 'id');
    }
    public function category_item(): HasMany
    {
        return $this->hasMany(Item::class, 'item_category_id', 'id');
    }
}

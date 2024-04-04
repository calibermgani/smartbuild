<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Category\Category;
use App\Models\Category\SubCategory;
use App\Models\Vendor\Vendor;
use App\Models\Procedure\Procedure;

class Item extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'items';
    protected $fillable = [
        'spid',
        'item_clone_id',
        'item_entry_status',
        'favorite',
        'item_number',
        'item_name',
        'item_category_id',
        'item_sub_category_id',
        'item_barcode',
        'item_procedure_id',
        'item_status',
        'vendor_id',
        'price',
        'size',
        'size_type',
        'store_qty',
        'cabinet_qty',
        'expired_date',
        'min_level',
        'cat_no',
        'lot_no',
        'item_description',
        'item_notes',
        'tag',
        'image_url',
        'unit',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public static function rules($id = null)
    {
        return [
            'item_number' => [
                'required',
                Rule::unique('items', 'item_number')->whereNull('deleted_at')->whereNull('item_clone_id')->ignore($id),
            ],
            'item_name' => [
                'required',
            ],
            'item_category_id' => [
                'required',
            ],
            'item_barcode' => [
                'required',
            ],
            'price' => [
                'required',
            ],
            'expired_date' => [
                'required',
            ],
        ];
    }

    public function item_category(): HasOne
    {
        return $this->hasOne(Category::class, 'id', 'item_category_id');
    }
    public function item_sub_category(): HasOne
    {
        return $this->hasOne(SubCategory::class, 'id', 'item_sub_category_id');
    }
    public function item_vendor(): HasOne
    {
        return $this->hasOne(Vendor::class, 'id', 'vendor_id');
    }

    public function item_procedures(): BelongsToMany
    {
        return $this->belongsToMany(Procedure::class , 'item_procedures', 'item_id', 'procedure_id');
    }
    public function item_clones(): HasMany
    {
        return $this->hasMany(Item::class, 'item_clone_id')->with(['item_category','item_sub_category','item_vendor','item_procedures']);
    }
}

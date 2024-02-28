<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Category\Category;
use App\Models\Category\SubCategory;
use App\Models\Vendor\Vendor;

class Item extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'items';
    protected $fillable = [
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
                Rule::unique('items', 'item_number')->whereNull('deleted_at')->ignore($id),
            ],
            'item_name' => [
                'required',
                Rule::unique('items', 'item_name')->whereNull('deleted_at')->ignore($id),
            ],
            'item_category_id' => [
                'required',
            ],
            'item_barcode' => [
                'required',
                Rule::unique('items', 'item_barcode')->whereNull('deleted_at')->ignore($id),
            ],
            'price' => [
                'required',
            ],
            'size' => [
                'required',
            ],
            'unit' => [
                'required',
            ],
            'expired_date' => [
                'required',
            ],
            'min_level' => [
                'required',
            ],
        ];
    }

    public function item_category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'item_category_id', 'id');
    }
    public function item_sub_category(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'item_sub_category_id', 'id');
    }
    public function item_vendor(): BelongsTo
    {
        return $this->belongsTo(Vendor::class, 'vendor_id', 'id');
    }
}

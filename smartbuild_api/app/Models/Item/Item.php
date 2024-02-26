<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'items';
    protected $fillable = [
        'item_number',
        'item_name',
        'item_category',
        'item_sub_category',
        'item_barcode',
        'item_procedure',
        'item_status',
        'vendor',
        'price',
        'size',
        'size_type',
        'unit',
        'cabinet_A_qty',
        'cabinet_B_qty',
        'expired_date',
        'min_level',
        'cat_no',
        'lot_no',
        'item_description',
        'item_notes',
        'tag',
        'status',
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
}

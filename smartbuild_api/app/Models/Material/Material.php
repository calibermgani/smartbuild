<?php

namespace App\Models\Material;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Material extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'item_no', 'item_name', 'items_category', 'item_description', 'procedure',
        'cat_no', 'lot_no', 'size', 'vendor', 'price', 'unit', 'expiry_date',
        'on_hand_qty', 'min_level', 'tags', 'notes', 'images', 'barcodes', 'added_by'
    ];

    public static $rules = [
        'item_no' => 'required',
        'item_name' => 'required',
        'items_category' => 'required',
       
    ];
}

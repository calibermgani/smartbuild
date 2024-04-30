<?php

namespace App\Models\Procedure;

use App\Models\Item\Item;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class ShoppingCart extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'shopping_carts';
    protected $fillable = [
        'mrn_number',
        'item_id',
        'patient_id',
        'quantity',
        'stage_type_id',
        'purchased_date',
        'purchased_by',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public function intra_procedure_items(): HasOne
    {
        return $this->hasOne(Item::class, 'id', 'item_id');
    }
}

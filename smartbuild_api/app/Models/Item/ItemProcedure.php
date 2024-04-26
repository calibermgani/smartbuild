<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ItemProcedure extends Model
{
    use HasFactory;

    public function item_details(): HasOne
    {
        return $this->hasOne(Item::class, 'id', 'item_id');
    }
}

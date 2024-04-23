<?php

namespace App\Models\Item;

use App\Models\Category\Category;
use App\Models\Category\SubCategory;
use App\Models\Vendor\Vendor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class ItemHistory extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'item_histories';
    protected $fillable = [
        'history_type_id',
        'data_id',
        'action_type',
        'action_by',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public function item_history(): HasOne
    {
        return $this->hasOne(Item::class, 'id', 'data_id')->withTrashed();
    }

    public function category_history(): HasOne
    {
        return $this->hasOne(Category::class, 'id', 'data_id')->withTrashed();
    }

    public function sub_category_history(): HasOne
    {
        return $this->hasOne(SubCategory::class, 'id', 'data_id')->withTrashed();
    }

    public function vendor_history(): HasOne
    {
        return $this->hasOne(Vendor::class, 'id', 'data_id')->withTrashed();
    }
}

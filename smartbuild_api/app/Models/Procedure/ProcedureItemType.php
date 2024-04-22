<?php

namespace App\Models\Procedure;

use App\Models\Item\Item;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProcedureItemType extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'procedure_item_types';
    protected $fillable = [
        'item_id',
        'procedure_id',
        'mrn_no',
        'accession_no',
        'type',
        'no_of_qty',
        'notes',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public function item(): HasOne
    {
        return $this->hasOne(Item::class, 'id', 'item_id');
    }
    public function procedure(): HasOne
    {
        return $this->hasOne(Procedure::class, 'id', 'procedure_id');
    }
}

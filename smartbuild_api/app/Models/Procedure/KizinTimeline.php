<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\Procedure\ShoppingTypes;

class KizinTimeline extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'kizin_timelines';

    protected $fillable = [
        'stage_id',
        'patient_id',
        'mrn_no',
        'procedure',
        'kizin_task_id',
        'added_by',
        'created_by',
        'updated_by',
        'deleted_by',
        'deleted_at',
    ];

    public function stages(): HasOne
    {
        return $this->hasOne(ShoppingTypes::class, 'id', 'stage_id');
    }
}

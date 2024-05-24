<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class KizinTask extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'kizin_tasks';

    protected $fillable = [
        'stage_id',
        'patient_id',
        'mrn_no',
        'procedure',
        'checklist_id',
        'checklist_date',
        'added_by',
        'created_by',
        'updated_by',
        'deleted_by',
    ];

}
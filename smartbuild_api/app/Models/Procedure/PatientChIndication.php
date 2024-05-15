<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientChIndication extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patient_ch_indications';

    protected $fillable = [
        'stage_id',
        'patient_id',
        'mrn_number',
        'procedure',
        'diagnosis',
        'code',
        'date',
        'added_by',
        'created_by',
        'updated_by',
        'deleted_by',
    ];
}

<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientMediations extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patient_mediations';

    protected $fillable = [
        'stage_id',
        'patient_id',
        'mrn_number',
        'procedure',
        'test_name',
        'result',
        'date',
        'added_by',
        'created_by',
        'updated_by',
        'deleted_by',
    ];
}

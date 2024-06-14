<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientPrecautionMoreData extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patient_precaution_more_data';
    protected $fillable = [
        'patient_precaution_id',
        'gcs_eye_opening',
        'gcs_verbal_response',
        'gcs_motor_response',
        'contrast_reaction_values',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
}

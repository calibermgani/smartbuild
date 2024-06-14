<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientVitals extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patient_vitals';
    protected $fillable = [
        'mrn_number',
        'patient_id',
        'procedure',
        'accession_no',
        'added_by',
        'blood_pressure',
        'heart_beat',
        'spO2',
        'respiratory_rate',
        'temperature',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
}

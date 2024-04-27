<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientRequestVetting extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patient_request_vettings';
    protected $fillable = [
        'mrn_number',
        'patient_id',
        'vetting_type_id',
        'vetting_notes',
        'vetting_by',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
}

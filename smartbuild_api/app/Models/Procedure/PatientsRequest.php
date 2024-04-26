<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientsRequest extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patients_requests';
    protected $fillable = [
        'mrn_number',
        'patient_id',
        'status',
        'accepted_by',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
}

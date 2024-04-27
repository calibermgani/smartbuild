<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientRequestProtocolling extends Model
{
    protected $table = 'patient_request_protocollings';
    protected $fillable = [
        'mrn_number',
        'patient_id',
        'protocol_type_id',
        'protocol_notes',
        'protocolling_by',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
}

<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
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
        'protocol_details',
        'add_your_protocol_id',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public function protocolling_types(): HasOne
    {
        return $this->hasOne(ProtocolType::class, 'id', 'protocol_type_id');
    }
}

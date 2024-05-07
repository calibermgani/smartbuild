<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientsInformation extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patients_information';
    protected $fillable = [
        'title',
        'marital_status',
        'first_name',
        'middle_name',
        'surname',
        'location',
        'age',
        'dob',
        'name_of_partner',
        'name_of_children',
        'referred_by',
        'occupation',
        'gender',
        'telephone',
        'primary_email',
        'address_type',
        'flat_unit_no',
        'street_no',
        'street_name',
        'suburb',
        'town_city',
        'state',
        'post_code',
        'mrn_no',
        'provider_no',
        'patient_type',
        'admission_type',
        'exam_status',
        'study_id',
        'priority',
        'procedure_status',
        'study_date_time',
        'accession_no',
        'requesting_physician',
        'specialty',
        'language',
        'blood_group',
        'weight',
        'height',
        'blood_pressure',
        'heart_beat',
        'spo2',
        'respiratory_rate',
        'temperature',
        'critical_information',
        'notes',
        'image',
        'procedure',
        'patient_source_from',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
}

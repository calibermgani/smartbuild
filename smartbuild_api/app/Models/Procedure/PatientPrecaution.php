<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PatientPrecaution extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patient_precautions';
    protected $fillable = [
        'mrn_number',
        'patient_id',
        'procedure',
        'accession_no',
        'added_by',
        'fall',
        'allergy',
        'isolation',	
        'covid',
        'gcs',
        'pregnant',	
        'diabetic',	
        'contrast_reaction',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public function precautions_more_data(): HasOne
    {
        return $this->hasOne(PatientPrecautionMoreData::class, 'patient_precaution_id', 'id');
    }
}

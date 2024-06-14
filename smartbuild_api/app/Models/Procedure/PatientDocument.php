<?php

namespace App\Models\Procedure;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientDocument extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'patient_documents';

    protected $fillable = [
        'patient_id',
        'document_name',
        'created_by',
        'updated_by',
        'deleted_by',
    ];
}

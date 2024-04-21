<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;


class Vendor extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'vendors';
    protected $fillable = [
        'VendorName',
        'VendorEmail',
        'VendorContactNo',
        'VendorAddress',
        'status',
        'ContactPerson',
        'Added_by',
        'updated_by',
        'deleted_by',
        'deleted_reason',
        'inactive_by',
        'inactive_reason',
        'inactive_date'
    ];
    public static function rules($id = null)
    {
        return [
            'VendorName' => [
                'required',
                Rule::unique('vendors', 'VendorName')->whereNull('deleted_at')->ignore($id),
            ],
            'VendorEmail' => [
                'required',
                Rule::unique('vendors', 'VendorEmail')->whereNull('deleted_at')->ignore($id),
            ],
            'VendorContactNo' => [
                'required',
                Rule::unique('vendors', 'VendorContactNo')->whereNull('deleted_at')->ignore($id),
            ],
        ];
    }
}

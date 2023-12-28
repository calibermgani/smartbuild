<?php

namespace App\Models\Vendor;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vendor extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'VendorName',
        'VendorEmail',
        'VendorContactNo',
        'VendorAddress',
        'Status',
        'ContactPerson',
        'Added_by'
    ];

    public static function rules($id = null)
{
    return [
        'Vendor Name' => 'required',
        'Vendor Email' => ['required', 'email', Rule::unique('vendors')->ignore($id)],
        'Vendor Contact No' => 'required',
    ];
}
}

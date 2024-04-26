<?php

namespace App\Models\Procedure;

use App\Models\Item\ItemProcedure;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\SoftDeletes;

class Procedure extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'procedures';
    protected $fillable = [
        'role_id',
        'procedure_name',
        'procedure_stage',
        'treatment_type',
        'procedure_list_shortcode',
        'procedure_list_description',
        'Status',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public static function rules($id = null)
    {
        return [
            'procedure_name' => [
                'required',
                Rule::unique('procedures', 'procedure_name')->whereNull('deleted_at')->ignore($id),
            ],
            'procedure_list_shortcode' => [
                'required',
                Rule::unique('procedures', 'procedure_list_shortcode')->whereNull('deleted_at')->ignore($id),
            ],
        ];
    }

    public function procedure_item(): HasMany
    {
        return $this->hasMany(ItemProcedure::class, 'procedure_id', 'id');
    }
}

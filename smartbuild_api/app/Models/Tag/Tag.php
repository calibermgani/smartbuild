<?php

namespace App\Models\Tag;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Validation\Rule;


class Tag extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'tags';
    protected $fillable = [
        'role_id',
        'tag_name',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
    public static function rules($id = null)
    {
        return [
            'tag_name' => [
                'required',
                Rule::unique('tags', 'tag_name')->whereNull('deleted_at')->ignore($id),
            ],
        ];
    }
}

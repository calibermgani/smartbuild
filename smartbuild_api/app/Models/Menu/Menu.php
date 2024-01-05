<?php

namespace App\Models\Menu;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'menu_name',
        'menu_description',
        'status',
        'added_by',
        'link',
         'icon'
    ];

}

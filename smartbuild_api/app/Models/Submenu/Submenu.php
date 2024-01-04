<?php

namespace App\Models\Submenu;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Submenu extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = [
        'menu_id',
        'submenu_name',
        'submenu_description',
        'status',
        'added_by',
    ];

    // Define the relationship with the Menu model
    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}

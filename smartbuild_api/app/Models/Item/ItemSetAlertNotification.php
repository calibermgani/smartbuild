<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class ItemSetAlertNotification extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'item_set_alert_notifications';

}

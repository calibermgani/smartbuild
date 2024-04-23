<?php

namespace App\Http\Helper;
use App\Models\Item\HistoryType;
use App\Models\Item\ItemHistory;

class Helpers
{
    public static function getHistoryData($data)
    {
        if (isset($data['history_type']) && !empty($data['history_type'])) {
            $history_type = HistoryType::where('name', $data['history_type'])->first();
            if (isset($history_type) && !empty($history_type)) {
                $data['history_type_id'] = $history_type->id;
                $history = ItemHistory::create($data);
            }
        }
    }
}

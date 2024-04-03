<?php

namespace App\Http\Controllers\Item;

use App\Http\Controllers\Controller;
use App\Models\Item\ItemSetAlertNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Item\Item;
use App\Models\Item\ItemProcedure;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    private $domainToken = '1a32e71a46317b9cc6feb7388238c95d';

    private function user_authentication($token)
    {
        return $token === $this->domainToken;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        {
            try {
                $token = $request->token;

                if (!$this->user_authentication($token)) {
                    return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
                }

                if (isset($request->store_qty) && !empty($request->store_qty)) {
                    $min_store_qty = $request->store_qty[0];
                    $max_store_qty = $request->store_qty[1];
                } else {
                    $min_store_qty = "";
                    $max_store_qty = "";
                }
                if (isset($request->cabinet_qty) && !empty($request->cabinet_qty)) {
                    $min_cabinet_qty = $request->cabinet_qty[0];
                    $max_cabinet_qty = $request->cabinet_qty[1];
                } else {
                    $min_cabinet_qty = "";
                    $max_cabinet_qty = "";
                }
                if (isset($request->price) && !empty($request->price)) {
                    $min_price = $request->price[0];
                    $max_price = $request->price[1];
                } else {
                    $min_price = "";
                    $max_price = "";
                }
                if (isset($request->min_level) && !empty($request->min_level)) {
                    $min_min_level = $request->min_level[0];
                    $max_min_level = $request->min_level[1];
                } else {
                    $min_min_level = "";
                    $max_min_level = "";
                }
                $items = Item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
                    ->where(function ($query) use ($request, $min_cabinet_qty, $max_cabinet_qty, $min_price, $max_price, $min_min_level, $max_min_level, $min_store_qty, $max_store_qty) {
                        if (isset($request->item_category_id) && !empty($request->item_category_id)) {
                            $query->where('item_category_id', $request->item_category_id);
                        } else {
                            $query;
                        }
                        if (isset($request->item_name) && !empty($request->item_name)) {
                            $query->where('item_name','like', '%' . $request->item_name . '%');
                        } else {
                            $query;
                        }
                        if (isset($request->item_procedure_id) && !empty($request->item_procedure_id)) {
                            $query->where('item_procedure_id','like', '%' . $request->item_procedure_id . '%');
                        } else {
                            $query;
                        }
                        if (!empty($min_cabinet_qty) && !empty($max_cabinet_qty)) {
                            $query->whereBetween('cabinet_qty', [$min_cabinet_qty, $max_cabinet_qty]);
                        } else {
                            $query;
                        }
                        if (!empty($min_store_qty) && !empty($max_store_qty)) {
                            $query->whereBetween('store_qty', [$min_store_qty, $max_store_qty]);
                        } else {
                            $query;
                        }
                        if (!empty($min_price) && !empty($max_price)) {
                            $query->whereBetween('price', [$min_price, $max_price]);
                        } else {
                            $query;
                        }
                        if (!empty($min_min_level) && !empty($max_min_level)) {
                            $query->whereBetween('min_level', [$min_min_level, $max_min_level]);
                        } else {
                            $query;
                        }
                        if (isset($request->tag) && !empty($request->tag)) {
                            $query->where('tag','like', '%' . $request->tag . '%');
                        } else {
                            $query;
                        }
                        if (isset($request->item_barcode) && !empty($request->item_barcode)) {
                            $query->where('item_barcode','like', '%' . $request->item_barcode . '%');
                        } else {
                            $query;
                        }
                        if (isset($request->item_notes) && !empty($request->item_notes)) {
                            $query->where('item_notes','like', '%' . $request->item_notes . '%');
                        } else {
                            $query;
                        }
                    })
                    ->get();
                    $itemsWithImageUrl = $items->map(function ($item) {
                        if ($item->image_url) {
                            $imageUrl = url(Storage::url('item_images/'.$item->spid.'/'.$item->image_url));
                        } else {
                            $imageUrl = null;
                        }
                        $item->setAttribute('image_url', $imageUrl);
                        return $item;
                    });
                return response()->json(['status' => 'Success', 'message' => 'Items retrieved successfully', 'code'=>200, 'total_count' => count($items), 'data' => $itemsWithImageUrl], 200);
            } catch (\Exception $e) {
                return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
            }
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data = $request->validate(Item::rules());
            if (isset($request->tag) && $request->tag != null) {
                $request['tag'] = implode(',', $request->tag);
            } else {
                $request['tag'] = null;
            }
            $lastItem = Item::orderBy('id', 'desc')->first();
            if (isset($lastItem) && !empty($lastItem)) {
                $request['spid'] = 'SPV' . Carbon::now()->year . $lastItem->id + 1;
            } else {
                $request['spid'] = 'SPV'. Carbon::now()->year . 1;
            }
            $request['item_entry_status'] = 'create';
            if (isset($request->item_procedure_id) && $request->item_procedure_id != null) {
                $request['item_procedure_id'] = implode(',', $request->item_procedure_id);
            } else {
                $request['item_procedure_id'] = null;
            }
            if ($request->hasFile('item_image')) {
                $filenameWithExt = $request->file('item_image')->getClientOriginalName();
                $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                $extension = $request->file('item_image')->getClientOriginalExtension();
                $fileNameToStore = $filename . '_' . time() . '.' . $extension;
                $path = $request->file('item_image')->storeAs('public/item_images/' . $request['spid'], $fileNameToStore);
                $request['image_url'] = $fileNameToStore;
            }else{
                $request['image_url'] = null;
            }
            $item = Item::create($request->all());
            if ($item) {
                if (isset($request->item_procedure_id) && $request->item_procedure_id != null) {
                    $procedureIds = explode(',', $request->item_procedure_id);
                    foreach ($procedureIds as $procedure_id) {
                        $itemProcedure = new ItemProcedure();
                        $itemProcedure->item_id = $item->id;
                        $itemProcedure->procedure_id = $procedure_id;
                        $itemProcedure->save();
                    }
                }
            }
            return response()->json(['status' => 'Success', 'message' => 'Item created successfully', 'code' => 200, 'data' => $item]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $item = Item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])->findOrFail($request->item_id);
            if ($item->image_url) {
                $imageUrl = url(Storage::url('item_images/'.$item->spid.'/'.$item->image_url));
            } else {
                $imageUrl = null;
            }
            $item->setAttribute('image_url', $imageUrl);
            return response()->json(['status' => 'Success', 'message' => 'Item retrieved successfully', 'code' => 200 , 'data' => $item]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            // $data = $request->validate(Item::rules($request->item_id));
            if (isset($request->tag) && $request->tag != null) {
                $request['tag'] = implode(',', $request->tag);
            } else {
                $request['tag'] = null;
            }
            $request['item_entry_status'] = 'update';
            if (isset($request->item_procedure_id) && $request->item_procedure_id != null) {
                $request['item_procedure_id'] = implode(',', $request->item_procedure_id);
            } else {
                $request['item_procedure_id'] = null;
            }
            $item = Item::findOrFail($request->item_id);
            $item->update($request->all());

            if (isset($request->item_procedure_id) && $request->item_procedure_id != null) {
                $item_procedure_ids = explode(',', $request->item_procedure_id);
                ItemProcedure::where('item_id', $item->id)->delete();
                foreach ($item_procedure_ids as $procedure_id) {
                    $itemProcedure = new ItemProcedure();
                    $itemProcedure->item_id = $item->id;
                    $itemProcedure->procedure_id = $procedure_id;
                    $itemProcedure->save();
                }
            }else{
                ItemProcedure::where('item_id', $item->id)->delete();
            }
            return response()->json(['status' => 'Success', 'message' => 'Item updated successfully', 'code' => 200, 'data' => $item]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $items = Item::whereIn('id', $request->item_id)->get();
            foreach ($items as $item) {
                $item->deletet_by = $request->deleted_by;
                $item->delete();
            }
            return response()->json(['status' => 'Success', 'message' => 'Item deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function itemQuantityUpdate(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->item_id) && !empty($request->item_id)) {
                $item_ids = explode(',', $request->item_id);
                $quantities = explode(',', $request->quantity);
                if (count($item_ids) === count($quantities)) {
                    foreach ($item_ids as $key => $item_id) {
                        $item = Item::find($item_id);
                        if (isset($item) && !empty($item)) {
                            $item->store_qty = $quantities[$key];
                            $item->save();
                        } else{
                            return response()->json(['status' => 'error', 'message' => 'Invalid input data', 'code' => 400]);
                        }
                    }
                    return response()->json(['status' => 'Success', 'message' => 'Item quantities updated successfully', 'code' => 200]);
                } else {
                    return response()->json(['status' => 'error', 'message' => 'Invalid input data', 'code' => 400]);
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemTagsUpdate(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->item_id) && !empty($request->item_id)) {
                foreach ($request->item_id as $key => $item_id) {
                    $item = Item::find($item_id);
                    if (isset($item) && !empty($item)) {
                        if (isset($item->tag) && !empty($item->tag)) {
                            $existingTags = explode(',', $item->tag);
                        } else {
                            $existingTags = null;
                        }
                        if (isset($existingTags) && !empty($existingTags)) {
                            $mergedTags = array_merge($existingTags, $request->tags);
                        } else {
                            $mergedTags = $request->tags;
                        }
                        $uniqueTags = array_unique($mergedTags);
                        $mergedTagString = implode(',', $uniqueTags);
                        $item->tag = $mergedTagString;
                        $item->save();
                    } else{
                        return response()->json(['status' => 'error', 'message' => 'Invalid input data', 'code' => 400]);
                    }
                }
                return response()->json(['status' => 'Success', 'message' => 'Item Tags updated successfully', 'code' => 200]);
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemClone(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $itemCheck = Item::whereIn('id', $request->item_id)->get();
            if (count($itemCheck) > 0) {
                foreach ($itemCheck as $key => $item) {
                    $lastItem = Item::orderBy('id', 'desc')->first();
                    if (isset($lastItem) && !empty($lastItem)) {
                        $item['spid'] = 'SPV' . Carbon::now()->year . $lastItem->id + 1;
                    } else {
                        $item['spid'] = 'SPV'. Carbon::now()->year . 1;
                    }
                    $clone = new Item();
                    $clone->spid = $item['spid'];
                    $clone->item_clone_id = $item['id'];
                    $clone->item_entry_status = "clone";
                    $clone->favorite = $item['favorite'];
                    $clone->item_number = $item['item_number'];
                    $clone->item_name = $item['item_name'];
                    $clone->item_category_id = $item['item_category_id'];
                    $clone->item_sub_category_id = $item['item_sub_category_id'];
                    $clone->item_barcode = $item['item_barcode'];
                    $clone->item_procedure_id = $item['item_procedure_id'];
                    $clone->item_status = $item['item_status'];
                    $clone->vendor_id = $item['vendor_id'];
                    $clone->price = $item['price'];
                    $clone->size = $item['size'];
                    $clone->size_type = $item['size_type'];
                    $clone->store_qty = $item['store_qty'];
                    $clone->cabinet_qty = $item['cabinet_qty'];
                    $clone->expired_date = $item['expired_date'];
                    $clone->min_level = $item['min_level'];
                    $clone->cat_no = $item['cat_no'];
                    $clone->lot_no = $item['lot_no'];
                    $clone->item_description = $item['item_description'];
                    $clone->item_notes = $item['item_notes'];
                    $clone->tag = $item['tag'];
                    $clone->image_url = $item['image_url'];
                    $clone->unit = $item['unit'];
                    $clone->created_by = 1;
                    $clone->save();
                    if ($clone) {
                        if (isset($item->item_procedure_id) && !empty($item->item_procedure_id)) {
                            $procedureIds = explode(',', $item->item_procedure_id);
                            foreach ($procedureIds as $procedure_id) {
                                $itemProcedure = new ItemProcedure();
                                $itemProcedure->item_id = $clone->id;
                                $itemProcedure->procedure_id = $procedure_id;
                                $itemProcedure->save();
                            }
                        }
                    }
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Item cloned successfully', 'code' => 200]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
    public function itemMove(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->item_id) && !empty($request->item_id)) {
                foreach ($request->item_id as $key => $item_id) {
                    $item = Item::find($item_id);
                    if (isset($item) && !empty($item)) {
                        $item ->item_category_id = $request->item_category_id;
                        $item ->item_sub_category_id = $request->item_sub_category_id;
                        $item->save();
                    } else{
                        return response()->json(['status' => 'error', 'message' => 'Invalid input data', 'code' => 400]);
                    }
                }
                return response()->json(['status' => 'Success', 'message' => 'Item moved successfully', 'code' => 200]);
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemBulkEdit(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->item_id) && !empty($request->item_id)) {
                foreach ($request->item_id as $key => $item_id) {
                    $item = Item::find($item_id);
                    if (isset($item) && !empty($item)) {

                        if (isset($item->item_procedure_id) && !empty($item->item_procedure_id)) {
                            $existingItemProcedures = explode(',', $item->item_procedure_id);
                        } else {
                            $existingItemProcedures = null;
                        }
                        if (isset($existingItemProcedures) && !empty($existingItemProcedures)) {
                            $mergedItemProcedures = array_merge($existingItemProcedures, $request->item_procedure_id);
                        } else {
                            $mergedItemProcedures = $request->item_procedure_id;
                        }
                        $uniqueItemProcedures = array_unique($mergedItemProcedures);
                        $item_procedures = implode(',', $uniqueItemProcedures);

                        if (isset($item->tag) && !empty($item->tag)) {
                            $existingTags = explode(',', $item->tag);
                        } else {
                            $existingTags = null;
                        }
                        if (isset($existingTags) && !empty($existingTags)) {
                            $mergedTags = array_merge($existingTags, $request->tags);
                        } else {
                            $mergedTags = $request->tags;
                        }
                        $uniqueTags = array_unique($mergedTags);
                        $mergedTagString = implode(',', $uniqueTags);
                        if (isset($item_procedures) && !empty($item_procedures)) {
                            $item->item_procedure_id = $item_procedures;
                        }
                        if (isset($mergedTagString) && !empty($mergedTagString)) {
                            $item->tag = $mergedTagString;
                        }
                        if (isset($request->price) && !empty($request->price)) {
                            $item->price = $request->price;
                        }
                        if (isset($request->store_qty) && !empty($request->store_qty)) {
                            $item->store_qty = $request->store_qty;
                        }
                        if (isset($request->min_level) && !empty($request->min_level)) {
                            $item->min_level = $request->min_level;
                        }
                        if (isset($request->item_notes) && !empty($request->item_notes)) {
                            $item->item_notes = $request->item_notes;
                        }
                        $item->save();
                        if (isset($request->item_procedure_id) && !empty($request->item_procedure_id)) {
                            $procedureIds = explode(',', $item->item_procedure_id);
                            ItemProcedure::where('item_id', $item->id)->delete();
                            foreach ($procedureIds as $procedure_id) {
                                $itemProcedure = new ItemProcedure();
                                $itemProcedure->item_id = $item->id;
                                $itemProcedure->procedure_id = $procedure_id;
                                $itemProcedure->save();
                            }
                        }
                    } else{
                        return response()->json(['status' => 'error', 'message' => 'Invalid input data', 'code' => 400]);
                    }
                }
                return response()->json(['status' => 'Success', 'message' => 'Item updated successfully', 'code' => 200]);
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
    public function itemSetAlert(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->item_id) && !empty($request->item_id)) {
                foreach ($request->item_id as $key => $item_id) {
                    ItemSetAlertNotification::where('item_id', $item_id)->delete();

                    $item_set_alert = new ItemSetAlertNotification;
                    $item_set_alert->item_id = $item_id;
                    $item_set_alert->vendor_id = $request->vendor_id;
                    $item_set_alert->set_alert_type_id = $request->set_alert_type_id;
                    $item_set_alert->min_level = $request->min_level;
                    $item_set_alert->alert_notification = 'No';
                    $item_set_alert->created_by = $request->created_by;
                    $item_set_alert->save();
                }
                return response()->json(['status' => 'Success', 'message' => 'Item updated successfully', 'code' => 200]);
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemRecall(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $item_recall = Item::select([
                'item_number as item_number',
                'item_name as item_name',
                'lot_no as lot_no',
                DB::raw('SUM(COALESCE(store_qty, 0)) as store_qty'),
                ])
                ->where('tag', 'like', '%Recall%')
                ->groupBy('item_number', 'item_name', 'lot_no')
                ->get()->toArray();

            return response()->json(['status' => 'Success', 'message' => 'Item recall successfully', 'code' => 200, 'total' => count($item_recall), 'data' => $item_recall]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function itemRefillToCabinet(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $item_refill_to_cabinet = Item::select([
                'item_number as item_number',
                'item_name as item_name',
                DB::raw('SUM(COALESCE(cabinet_qty, 0)) as cabinet_total_qty'),
                ])
                ->groupBy('item_number', 'item_name')
                ->havingRaw('SUM(COALESCE(cabinet_qty, 0)) <= 50')
                ->get()->toArray();

            return response()->json(['status' => 'Success', 'message' => 'Item refill quantity for cabinet successfully retrieved', 'code' => 200, 'total' => count($item_refill_to_cabinet), 'data' => $item_refill_to_cabinet]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
    public function nearExpiredItems(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $startDate = Carbon::now()->format('Y-m-d');
            $endDate = Carbon::now()->addMonths(3)->format('Y-m-d');

            $nearExpiredItems = Item::select([
                'item_number as item_number',
                'item_name as item_name',
                DB::raw('SUM(COALESCE(store_qty, 0)) as total_store_qty'),
                'expired_date as expired_date'
                ])
                ->whereBetween('expired_date', [$startDate, $endDate])
                ->groupBy('item_number', 'item_name', 'expired_date')
                ->get()->toArray();

            return response()->json(['status' => 'Success', 'message' => 'Near expiry items successfully retrieved', 'code' => 200, 'total' => count($nearExpiredItems), 'data' => $nearExpiredItems]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}

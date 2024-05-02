<?php

namespace App\Http\Controllers\Item;

use App\Http\Controllers\Controller;
use App\Http\Helper\Helpers;
use App\Models\Category\Category;
use App\Models\Category\SubCategory;
use App\Models\Item\ItemHistory;
use App\Models\Item\ItemSetAlertNotification;
use App\Models\Procedure\Procedure;
use App\Models\Procedure\ProcedureItemType;
use App\Models\Vendor\Vendor;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Item\Item;
use App\Models\Item\ItemProcedure;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\File;

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
                    $min_store_qty = "0";
                    $max_store_qty = "0";
                }
                if (isset($request->cabinet_qty) && !empty($request->cabinet_qty)) {
                    $min_cabinet_qty = $request->cabinet_qty[0];
                    $max_cabinet_qty = $request->cabinet_qty[1];
                } else {
                    $min_cabinet_qty = "0";
                    $max_cabinet_qty = "0";
                }
                if (isset($request->price) && !empty($request->price)) {
                    $min_price = $request->price[0];
                    $max_price = $request->price[1];
                } else {
                    $min_price = "0";
                    $max_price = "0";
                }
                if (isset($request->min_level) && !empty($request->min_level)) {
                    $min_min_level = $request->min_level[0];
                    $max_min_level = $request->min_level[1];
                } else {
                    $min_min_level = "0";
                    $max_min_level = "0";
                }
                $items = Item::with(['item_category' ,'item_sub_category','item_vendor', 'item_procedures'])
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
                        if (!empty($max_cabinet_qty)) {
                            $query->whereBetween('cabinet_qty', [$min_cabinet_qty, $max_cabinet_qty]);
                        } else {
                            $query;
                        }
                        if (!empty($max_store_qty)) {
                            $query->whereBetween('store_qty', [$min_store_qty, $max_store_qty]);
                        } else {
                            $query;
                        }
                        if (!empty($max_price)) {
                            $query->whereBetween('price', [$min_price, $max_price]);
                        } else {
                            $query;
                        }
                        if (!empty($max_min_level)) {
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
                        if (isset($request->index_barcode) && !empty($request->index_barcode)) {
                            $query->where('item_barcode','like', '%' . $request->index_barcode . '%');
                        } else {
                            $query;
                        }
                    })
                    // ->whereHas('item_category', function ($query) {
                    //     $query->where('status', 'Active')
                    //           ->whereNull('deleted_at');
                    // })
                    // ->where(function ($query) use ($request) {
                    //     $query->whereHas('item_sub_category', function ($query) use ($request) {
                    //         $query->where('status', 'Active')
                    //               ->whereNull('deleted_at');
                    //     })->orWhereNull('item_sub_category_id');
                    // })
                    ->orderBy('id', 'desc')
                    ->get();
                    $itemsStatus = $items->map(function ($item) {
                        if(isset($item->item_status) && !empty($item->item_status)) {
                            if ($item->item_status == 1) {
                                $status = 'Active';
                            } else {
                                $status = 'Inactive';
                            }
                            $item->setAttribute('item_status', $status);
                            return $item;
                        }
                    });
                    $itemsProcedures = $items->map(function ($item) {
                        if(isset($item->item_procedure_id) && !empty($item->item_procedure_id)) {
                            $data = explode(',', $item->item_procedure_id);
                            $procedures = ItemProcedure::selectRaw('GROUP_CONCAT(procedures.procedure_name) as procedure_names')
                                ->leftJoin('procedures', 'procedures.id', '=', 'item_procedures.procedure_id')
                                ->whereIn('item_procedures.procedure_id', $data)
                                ->where('item_procedures.item_id', $item->id)
                                ->groupBy('item_procedures.item_id')
                                ->first();
                            $item->setAttribute('item_procedure_id', $procedures->procedure_names);
                            return $item;
                        }
                    });
                    $itemsWithImageUrl = $items->map(function ($item) {
                        if ($item->image_url) {
                            $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                        } else {
                            $imageUrl = null;
                        }
                        $item->setAttribute('image_url', $imageUrl);
                        return $item;
                    });
                return response()->json(['status' => 'Success', 'message' => 'Items retrieved successfully', 'code'=>200, 'total_count' => count($items), 'data' => $items], 200);
            } catch (\Exception $e) {
                log::debug($e->getMessage());
                return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
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
            $validator = validator()->make($request->all(), Item::rules());

            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                $errorMessage = implode(' ', $errors);
                return response()->json(['status' => 'error', 'code' => 500, 'message' => $errorMessage], 500);
            }
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
                if (!Storage::exists('public/item_images/' . $request['spid'])) {
                    $storage_path = Storage::makeDirectory('public/item_images/' . $request['spid'], 0775, true);
                    $path = $request->file('item_image')->storeAs('public/item_images/' . $request['spid'], $fileNameToStore);
                } else {
                    $path = $request->file('item_image')->storeAs('public/item_images/' . $request['spid'], $fileNameToStore);
                }
                $request['image_url'] = $fileNameToStore;
            }else{
                $request['image_url'] = null;
            }
            if ($request->item_status == '2') {
                $request['inactive_date'] = Carbon::now()->format('Y-m-d');
            }else{
                $request['inactive_date'] = null;
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
            if (isset($item) && !empty($item)) {
                $history['history_type'] = 'item';
                $history['data_id'] = $item->id;
                $history['action_by'] = 1;
                $history['created_by'] = 1;
                $history['action_type'] = 'create';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Item created successfully', 'code' => 200, 'data' => $item]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
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
                $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
            } else {
                $imageUrl = null;
            }
            $item->setAttribute('image_url', $imageUrl);
            return response()->json(['status' => 'Success', 'message' => 'Item retrieved successfully', 'code' => 200 , 'data' => $item]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
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
            if (empty($request->item_category_id) || $request->item_category_id == null) {
                return response()->json(['status' => 'error', 'code' => 500, 'message' => 'The item category is inactive. Please activate it and update the item.'], 500);
            }
            $validator = validator()->make($request->all(), Item::rules($request->item_id));

            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                $errorMessage = implode(' ', $errors);
                return response()->json(['status' => 'error', 'code' => 500, 'message' => $errorMessage], 500);
            }
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
            if (isset($request->item_image) && !empty($request->item_image)) {
                $requestedImageUrl = $request->item_image;
                $requestedImageName = pathinfo($request->item_image, PATHINFO_BASENAME);
                if ($requestedImageName === $item->image_url) {
                    $request['image_url'] = $requestedImageName;
                }else{
                    if ($request->hasFile('item_image')) {
                        $filenameWithExt = $request->file('item_image')->getClientOriginalName();
                        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                        $extension = $request->file('item_image')->getClientOriginalExtension();
                        $fileNameToStore = $filename . '_' . time() . '.' . $extension;
                        if (!Storage::exists('public/item_images/' . $item['spid'])) {
                            $storage_path = Storage::makeDirectory('public/item_images/' . $item['spid'], 0775, true);
                            $path = $request->file('item_image')->storeAs('public/item_images/' . $item['spid'], $fileNameToStore);
                        } else {
                            $path = $request->file('item_image')->storeAs('public/item_images/' . $item['spid'], $fileNameToStore);
                        }
                        $request['image_url'] = $fileNameToStore;
                    }else{
                        $request['image_url'] = null;
                    }
                }
            } else {
                $request['image_url'] = null;
            }
            if ($request->item_status == '2') {
                $request['inactive_date'] = Carbon::now()->format('Y-m-d');
            }else{
                $request['inactive_date'] = null;
            }
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
            if (isset($item) && !empty($item)) {
                $history['history_type'] = 'item';
                $history['data_id'] = $item->id;
                $history['action_by'] = 1;
                $history['updated_by'] = 1;
                $history['action_type'] = 'update';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Item updated successfully', 'code' => 200, 'data' => $item]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
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
                $item->item_procedure_id = null;
                $item->deleted_by = $request->deleted_by;
                $item->deleted_reason = $request->deleted_reason;
                $item->deleted_at = Carbon::now();
                $item->save();

                $procedure = ItemProcedure::where('item_id', $item->id)->get();
                if(isset($procedure) && !empty($procedure)){
                    foreach ($procedure as $key => $value) {
                        $value->delete();
                    }
                }

                $history['history_type'] = 'item';
                $history['data_id'] = $item->id;
                $history['action_by'] = 1;
                $history['deleted_by'] = 1;
                $history['action_type'] = 'delete';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Item deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
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
                    $sourcePath = 'public/item_images/' . $item->spid . '/' . $item->image_url;
                    if (isset($lastItem) && !empty($lastItem)) {
                        $item['spid'] = 'SPV' . Carbon::now()->year . $lastItem->id + 1;
                    } else {
                        $item['spid'] = 'SPV'. Carbon::now()->year . 1;
                    }
                    $storage_path = Storage::makeDirectory('public/item_images/' . $item['spid'], 0775, true);
                    $destinationPath = 'public/item_images/' . $item->spid . '/' . $item->image_url;
                    Storage::copy($sourcePath, $destinationPath);
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
                    if (isset($clone) && !empty($clone)) {
                        $history['history_type'] = 'item';
                        $history['data_id'] = $clone->id;
                        $history['action_by'] = 1;
                        $history['updated_by'] = 1;
                        $history['action_type'] = 'clone';
                        Helpers::getHistoryData($history);
                    }
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Item cloned successfully', 'code' => 200]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
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

            $item_recall = Item::with(['item_category' ,'item_sub_category','item_vendor', 'item_procedures'])->where('tag', 'like', '%Recall%')->get();
            $itemsStatus = $item_recall->map(function ($item) {
                if(isset($item->item_status) && !empty($item->item_status)) {
                    if ($item->item_status == 1) {
                        $status = 'Active';
                    } else {
                        $status = 'Inactive';
                    }
                    $item->setAttribute('item_status', $status);
                    return $item;
                }
            });
            $itemsProcedures = $item_recall->map(function ($item) {
                if(isset($item->item_procedure_id) && !empty($item->item_procedure_id)) {
                    $data = explode(',', $item->item_procedure_id);
                    $procedures = ItemProcedure::selectRaw('GROUP_CONCAT(procedures.procedure_name) as procedure_names')
                        ->leftJoin('procedures', 'procedures.id', '=', 'item_procedures.procedure_id')
                        ->whereIn('item_procedures.procedure_id', $data)
                        ->groupBy('item_procedures.item_id')
                        ->first();
                    $item->setAttribute('item_procedure_id', $procedures->procedure_names);
                    return $item;
                }
            });
            $itemsWithImageUrl = $item_recall->map(function ($item) {
                if ($item->image_url) {
                    $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                } else {
                    $imageUrl = null;
                }
                $item->setAttribute('image_url', $imageUrl);
                return $item;
            });

            return response()->json(['status' => 'Success', 'message' => 'Item recall successfully', 'code' => 200, 'total' => count($item_recall), 'data' => $item_recall]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemRefillToCabinet(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $item_refill_to_cabinet = Item::with(['item_category' ,'item_sub_category','item_vendor', 'item_procedures'])
                ->whereRaw('COALESCE(cabinet_qty, 0) <= 50')
                ->get();
            $itemsStatus = $item_refill_to_cabinet->map(function ($item) {
                if(isset($item->item_status) && !empty($item->item_status)) {
                    if ($item->item_status == 1) {
                        $status = 'Active';
                    } else {
                        $status = 'Inactive';
                    }
                    $item->setAttribute('item_status', $status);
                    return $item;
                }
            });
            $itemsProcedures = $item_refill_to_cabinet->map(function ($item) {
                if(isset($item->item_procedure_id) && !empty($item->item_procedure_id)) {
                    $data = explode(',', $item->item_procedure_id);
                    $procedures = ItemProcedure::selectRaw('GROUP_CONCAT(procedures.procedure_name) as procedure_names')
                        ->leftJoin('procedures', 'procedures.id', '=', 'item_procedures.procedure_id')
                        ->whereIn('item_procedures.procedure_id', $data)
                        ->groupBy('item_procedures.item_id')
                        ->first();
                    $item->setAttribute('item_procedure_id', $procedures->procedure_names);
                    return $item;
                }
            });
            $itemsWithImageUrl = $item_refill_to_cabinet->map(function ($item) {
                if ($item->image_url) {
                    $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                } else {
                    $imageUrl = null;
                }
                $item->setAttribute('image_url', $imageUrl);
                return $item;
            });

            return response()->json(['status' => 'Success', 'message' => 'Item refill quantity for cabinet successfully retrieved', 'code' => 200, 'total' => count($item_refill_to_cabinet), 'data' => $item_refill_to_cabinet]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
    public function nearExpiredItems(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            if (isset($request->expired_date) && !empty($request->expired_date)) {
                $start_expired_date = date('Y-m-d', strtotime($request->expired_date[0]));
                $end_expired_date = date('Y-m-d', strtotime($request->expired_date[1]));
            } else {
                $start_expired_date = "";
                $end_expired_date = "";
            }
            $startDate = Carbon::now()->format('Y-m-d');
            $endDate = Carbon::now()->addMonths(3)->format('Y-m-d');

            $nearExpiredItems = Item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
                ->whereBetween('expired_date', [$startDate, $endDate])
                ->where(function ($query) use ($start_expired_date, $end_expired_date) {
                    if(!empty($start_expired_date) && !empty($end_expired_date)){
                        $query->whereBetween('expired_date', [$start_expired_date, $end_expired_date]);
                    }else{
                        $query;
                    }
                })
                ->get();
            $itemsStatus = $nearExpiredItems->map(function ($item) {
                if(isset($item->item_status) && !empty($item->item_status)) {
                    if ($item->item_status == 1) {
                        $status = 'Active';
                    } else {
                        $status = 'Inactive';
                    }
                    $item->setAttribute('item_status', $status);
                    return $item;
                }
            });
            $itemsProcedures = $nearExpiredItems->map(function ($item) {
                if(isset($item->item_procedure_id) && !empty($item->item_procedure_id)) {
                    $data = explode(',', $item->item_procedure_id);
                    $procedures = ItemProcedure::selectRaw('GROUP_CONCAT(procedures.procedure_name) as procedure_names')
                        ->leftJoin('procedures', 'procedures.id', '=', 'item_procedures.procedure_id')
                        ->whereIn('item_procedures.procedure_id', $data)
                        ->groupBy('item_procedures.item_id')
                        ->first();
                    $item->setAttribute('item_procedure_id', $procedures->procedure_names);
                    return $item;
                }
            });
            $itemsWithImageUrl = $nearExpiredItems->map(function ($item) {
                if ($item->image_url) {
                    $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                } else {
                    $imageUrl = null;
                }
                $item->setAttribute('image_url', $imageUrl);
                return $item;
            });
            return response()->json(['status' => 'Success', 'message' => 'Near expiry items successfully retrieved', 'code' => 200, 'total' => count($nearExpiredItems), 'data' => $nearExpiredItems]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function trashedItems(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data['items'] = item::onlyTrashed()->with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
                ->orderBy('id', 'desc')
                ->get();
            $itemsWithImageUrl = $data['items']->map(function ($item) {
                if ($item->image_url) {
                    $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                } else {
                    $imageUrl = null;
                }
                $item->setAttribute('image_url', $imageUrl);
                return $item;
            });
            $data['categories'] = Category::onlyTrashed()->with('sub_category')->get();
            $data['sub_categories'] = SubCategory::onlyTrashed()->with('category')->get();
            $data['vendors'] = Vendor::onlyTrashed()->get();
            $data['procedures'] = Procedure::onlyTrashed()->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Trash data retrieved successfully', 'code' => 200, 'data' => $data]);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function restoredItems(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->item_id) && !empty($request->item_id)) {
                foreach ($request->item_id as $key => $item_id) {
                    $item = Item::withTrashed()->find($item_id);
                    if (isset($item) && !empty($item)) {
                        $item->deleted_at = null;
                        $item->deleted_by = null;
                        $item->deleted_reason = null;
                        $item->save();
                    }
                }
            }
            if (isset($request->category_id) && !empty($request->category_id)) {
                foreach ($request->category_id as $key => $category_id) {
                    $category = Category::withTrashed()->find($category_id);
                    if (isset($category) && !empty($category)) {
                        $category->deleted_at = null;
                        $category->deleted_by = null;
                        $category->deleted_reason = null;
                        $category->save();
                    }
                }
            }
            if (isset($request->sub_category_id) && !empty($request->sub_category_id)) {
                foreach ($request->sub_category_id as $key => $sub_category_id) {
                    $sub_category = SubCategory::withTrashed()->find($sub_category_id);
                    if (isset($sub_category) && !empty($sub_category)) {
                        $sub_category->deleted_at = null;
                        $sub_category->deleted_by = null;
                        $sub_category->deleted_reason = null;
                        $sub_category->save();
                    }
                }
            }
            if (isset($request->vendor_id) && !empty($request->vendor_id)) {
                foreach ($request->vendor_id as $key => $vendor_id) {
                    $vendor = Vendor::withTrashed()->find($vendor_id);
                    if (isset($vendor) && !empty($vendor)) {
                        $vendor->deleted_at = null;
                        $vendor->deleted_by = null;
                        $vendor->deleted_reason = null;
                        $vendor->save();
                    }
                }
            }
            if (isset($request->procedure_id) && !empty($request->procedure_id)) {
                foreach ($request->procedure_id as $key => $procedure_id) {
                    $procedure = Procedure::withTrashed()->find($procedure_id);
                    if (isset($procedure) && !empty($procedure)) {
                        $procedure->deleted_at = null;
                        $procedure->save();
                    }
                }
            }
            return response()->json(['status' => 'Success', 'message' => 'Data resorted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemsCategorySearch(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data = item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
                ->where(function ($query) use ($request) {
                    if (isset($request->item_category_id) && !empty($request->item_category_id)) {
                        $query->where('item_category_id', $request->item_category_id);
                    } else {
                        $query;
                    }
                    if (isset($request->item_sub_category_id) && !empty($request->item_sub_category_id)) {
                        $query->where('item_sub_category_id', $request->item_sub_category_id);
                    }else{
                        $query;
                    }
                })
                ->orderBy('id', 'desc')
                ->get();
                $itemsWithImageUrl = $data->map(function ($item) {
                    if ($item->image_url) {
                        $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                    } else {
                        $imageUrl = null;
                    }
                    $item->setAttribute('image_url', $imageUrl);
                    return $item;
                });
            return response()->json(['status' => 'Success', 'message' => 'Category item retrieved successfully', 'code' => 200 , 'total_couunt' => count($data), 'items' => $data]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function inactiveItems(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data['items'] = item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
                ->where('item_status', 2)
                ->orderBy('id', 'desc')
                ->get();
            $itemsStatus = $data['items']->map(function ($item) {
                if(isset($item->item_status) && !empty($item->item_status)) {
                    if ($item->item_status == 1) {
                        $status = 'Active';
                    } else {
                        $status = 'Inactive';
                    }
                    $item->setAttribute('item_status', $status);
                    return $item;
                }
            });
            $itemsWithImageUrl = $data['items']->map(function ($item) {
                if ($item->image_url) {
                    $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                } else {
                    $imageUrl = null;
                }
                $item->setAttribute('image_url', $imageUrl);
                return $item;
            });
            $data['categories'] = Category::with('sub_category')->where('status', 'Inactive')->get();
            $data['sub_categories'] = SubCategory::with('category')->where('status', 'Inactive')->get();
            $data['vendors'] = Vendor::where('status', 'Inactive')->get();
            $data['procedures'] = Procedure::where('status', 'Inactive')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Inactive data retrieved successfully', 'code' => 200, 'data' => $data]);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function restoredInactiveItems(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->item_id) && !empty($request->item_id)) {
                foreach ($request->item_id as $key => $item_id) {
                    $item = Item::withTrashed()->find($item_id);
                    if (isset($item) && !empty($item)) {
                        $item->item_status = 1;
                        $item->inactive_by = null;
                        $item->inactive_reason = null;
                        $item->inactive_date = null;
                        $item->save();
                    }
                }
            }
            if (isset($request->category_id) && !empty($request->category_id)) {
                foreach ($request->category_id as $key => $category_id) {
                    $category = Category::withTrashed()->find($category_id);
                    if (isset($category) && !empty($category)) {
                        $category->status = 'Active';
                        $category->inactive_by = null;
                        $category->inactive_reason = null;
                        $category->inactive_date = null;
                        $category->save();
                    }
                }
            }
            if (isset($request->sub_category_id) && !empty($request->sub_category_id)) {
                foreach ($request->sub_category_id as $key => $sub_category_id) {
                    $sub_category = SubCategory::withTrashed()->find($sub_category_id);
                    if (isset($sub_category) && !empty($sub_category)) {
                        $sub_category->status = 'Active';
                        $sub_category->inactive_by = null;
                        $sub_category->inactive_reason = null;
                        $sub_category->inactive_date = null;
                        $sub_category->save();
                    }
                }
            }
            if (isset($request->vendor_id) && !empty($request->vendor_id)) {
                foreach ($request->vendor_id as $key => $vendor_id) {
                    $vendor = Vendor::withTrashed()->find($vendor_id);
                    if (isset($vendor) && !empty($vendor)) {
                        $vendor->status = 'Active';
                        $vendor->inactive_by = null;
                        $vendor->inactive_reason = null;
                        $vendor->inactive_date = null;
                        $vendor->save();
                    }
                }
            }
            if (isset($request->procedure_id) && !empty($request->procedure_id)) {
                foreach ($request->procedure_id as $key => $procedure_id) {
                    $procedure = Procedure::withTrashed()->find($procedure_id);
                    if (isset($procedure) && !empty($procedure)) {
                        $procedure->status = 'Active';
                        $procedure->save();
                    }
                }
            }
            return response()->json(['status' => 'Success', 'message' => 'Inactive data resorted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemLowStock(Request $request)
    {
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $item_low_stock = Item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
                ->whereRaw('COALESCE(store_qty, 0) <= 50')
                ->get();
            $itemsStatus = $item_low_stock->map(function ($item) {
                if(isset($item->item_status) && !empty($item->item_status)) {
                    if ($item->item_status == 1) {
                        $status = 'Active';
                    } else {
                        $status = 'Inactive';
                    }
                    $item->setAttribute('item_status', $status);
                    return $item;
                }
            });
            $itemsProcedures = $item_low_stock->map(function ($item) {
                if(isset($item->item_procedure_id) && !empty($item->item_procedure_id)) {
                    $data = explode(',', $item->item_procedure_id);
                    $procedures = ItemProcedure::selectRaw('GROUP_CONCAT(procedures.procedure_name) as procedure_names')
                        ->leftJoin('procedures', 'procedures.id', '=', 'item_procedures.procedure_id')
                        ->whereIn('item_procedures.procedure_id', $data)
                        ->groupBy('item_procedures.item_id')
                        ->first();
                    $item->setAttribute('item_procedure_id', $procedures->procedure_names);
                    return $item;
                }
            });
            $itemsWithImageUrl = $item_low_stock->map(function ($item) {
                if ($item->image_url) {
                    $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                } else {
                    $imageUrl = null;
                }
                $item->setAttribute('image_url', $imageUrl);
                return $item;
            });

            return response()->json(['status' => 'Success', 'message' => 'Item low stock data retrieved successfully', 'code' => 200, 'total' => count($item_low_stock), 'data' => $item_low_stock]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemHistoryDetails(Request $request){
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $itemHistory = Item::with([
                'item_histories'
                ])
                ->where('id', $request->item_id)
                ->first();
            if (isset($itemHistory->image_url) && !empty($itemHistory->image_url)) {
                $imageUrl = Storage::url('item_images/'.$itemHistory->spid.'/'.$itemHistory->image_url);
            } else {
                $imageUrl = null;
            }
            $itemHistory->setAttribute('image_url', $imageUrl);

            return response()->json(['status' => 'Success', 'message' => 'Item low stock data retrieved successfully', 'code' => 200, 'data' => $itemHistory]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function procedureItemDashboard(Request $request){
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data['item_recall'] = Item::where('tag', 'like', '%Recall%')->get()->count();
            $data['item_refill_to_cabinet'] = Item::with(['item_category' ,'item_sub_category','item_vendor', 'item_procedures'])
                ->whereRaw('COALESCE(cabinet_qty, 0) <= 50')
                ->get()->count();
            $data['item_low_stock'] = Item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
            ->whereRaw('COALESCE(store_qty, 0) <= 50')
            ->get()->count();

            $startDate = Carbon::now()->format('Y-m-d');
            $endDate = Carbon::now()->addMonths(3)->format('Y-m-d');
            $data['near_expired_items'] = Item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])
                ->whereBetween('expired_date', [$startDate, $endDate])
                ->get()->count();
            $data['damaged_items'] = ProcedureItemType::with(['procedure', 'item'])->select([
                'mrn_no',
                'item_id',
                'accession_no',
                DB::raw('SUM(no_of_qty) as total_qty')
            ])
                ->where('type', 'Damaged')
                ->groupBy('mrn_no', 'item_id', 'accession_no')
                ->get()->count();

            return response()->json(['status' => 'Success', 'message' => 'Dashboard counts', 'code' => 200, 'data' => $data]);
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
}

<?php

namespace App\Http\Controllers\Item;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Item\Item;
use App\Models\Item\ItemProcedure;

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

                $items = Item::with(['item_category', 'item_sub_category', 'item_vendor', 'item_procedures'])->get();
                return response()->json(['status' => 'Success', 'message' => 'Items retrieved successfully', 'code'=>200, 'data' => $items], 200);
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
            if (isset($request->tag) && !empty($request->tag)) {
                $request['tag'] = implode(',', $request->tag);
            } else {
                $request['tag'] = "";
            }
            $lastItem = Item::orderBy('id', 'desc')->first();
            if (isset($lastItem) && !empty($lastItem)) {
                $request['spid'] = 'SPV' . Carbon::now()->year . $lastItem->id + 1;
            } else {
                $request['spid'] = 'SPV'. Carbon::now()->year . 1;
            }
            $request['item_entry_status'] = 'create';
            $item = Item::create($request->all());
            if ($item) {
                if (isset($request->item_procedure_id) && !empty($request->item_procedure_id)) {
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
            $data = $request->validate(Item::rules($request->item_id));
            if (isset($request->tag) && !empty($request->tag)) {
                $request['tag'] = implode(',', $request->tag);
            } else {
                $request['tag'] = "";
            }
            $request['item_entry_status'] = 'update';
            $item = Item::findOrFail($request->item_id);
            $item->update($request->all());
            if (isset($request->item_procedure_id) && !empty($request->item_procedure_id)) {
                $item_procedure_ids = explode(',', $request->item_procedure_id);
                ItemProcedure::where('item_id', $item->id)->delete();
                foreach ($item_procedure_ids as $procedure_id) {
                    $itemProcedure = new ItemProcedure();
                    $itemProcedure->item_id = $item->id;
                    $itemProcedure->procedure_id = $procedure_id;
                    $itemProcedure->save();
                }
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
            return response()->json(['status' => 'Success', 'message' => 'Sub Category deleted successfully', 'code' => 200]);
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
                    return response()->json(['status' => 'success', 'message' => 'Item quantities updated successfully', 'code' => 200]);
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
                        $existingTags = explode(',', $item->tag);
                        $mergedTags = array_merge($existingTags, $request->tags);
                        $uniqueTags = array_unique($mergedTags);
                        $mergedTagString = implode(',', $uniqueTags);
                        $item->tag = $mergedTagString;
                        $item->save();
                    } else{
                        return response()->json(['status' => 'error', 'message' => 'Invalid input data', 'code' => 400]);
                    }
                }
                return response()->json(['status' => 'success', 'message' => 'Item quantities updated successfully', 'code' => 200]);
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
        } catch (\Exception $e) {
            log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
}

<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Http\Helper\Helpers;
use Illuminate\Http\Request;
use App\Models\Category\SubCategory;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class SubCategoryController extends Controller
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

                $subCategories = SubCategory::with(['category'])->where('status', 'Active')->get();
                return response()->json(['status' => 'Success', 'message' => 'Sub Category retrieved successfully', 'code'=>200, 'data' => $subCategories], 200);
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
            $data = $request->validate(SubCategory::rules(null, $request->category_id));
            if ($request->status == 'Inactive') {
                $request['inactive_date'] = Carbon::now()->format('Y-m-d');
            }else{
                $request['inactive_date'] = null;
            }
            $subCategory = SubCategory::create($request->all());
            if (isset($subCategory) && !empty($subCategory)) {
                $history['history_type'] = 'sub_category';
                $history['data_id'] = $subCategory->id;
                $history['action_by'] = 1;
                $history['created_by'] = 1;
                $history['action_type'] = 'create';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Sub Category created successfully', 'code' => 200, 'data' => $subCategory]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
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

            $subCategory = SubCategory::with(['category'])->findOrFail($request->sub_category_id);
            return response()->json(['status' => 'Success', 'message' => 'Sub Category retrieved successfully', 'code' => 200 , 'data' => $subCategory]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
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
            $data = $request->validate(SubCategory::rules($request->sub_category_id, $request->category_id));

            if ($request->status == 'Inactive') {
                $request['inactive_date'] = Carbon::now()->format('Y-m-d');
            }else{
                $request['inactive_date'] = null;
            }
            $subCategory = SubCategory::findOrFail($request->sub_category_id);
            $subCategory->update($request->all());
            if (isset($subCategory) && !empty($subCategory)) {
                $history['history_type'] = 'sub_category';
                $history['data_id'] = $subCategory->id;
                $history['action_by'] = 1;
                $history['updated_by'] = 1;
                $history['action_type'] = 'update';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Sub Category updated successfully', 'code' => 200, 'data' => $subCategory]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
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

            $subCategory = SubCategory::findOrFail($request->sub_category_id);
            if (isset($subCategory) && !empty($subCategory)) {
                $subCategory->deleted_by = $request->deleted_by;
                $subCategory->deleted_reason = $request->deleted_reason;
                $subCategory->deleted_at = Carbon::now();
                $subCategory->save();

                $history['history_type'] = 'sub_category';
                $history['data_id'] = $subCategory->id;
                $history['action_by'] = 1;
                $history['deleted_by'] = 1;
                $history['action_type'] = 'delete';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Sub Category deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
}

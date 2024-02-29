<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category\SubCategory;

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

                $subCategories = SubCategory::with(['category'])->get();
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
            $subCategory = SubCategory::create($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Sub Category created successfully', 'code' => 200, 'data' => $subCategory]);
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

            $subCategory = SubCategory::with(['category'])->findOrFail($request->sub_category_id);
            return response()->json(['status' => 'Success', 'message' => 'Sub Category retrieved successfully', 'code' => 200 , 'data' => $subCategory]);
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
            $data = $request->validate(SubCategory::rules($request->sub_category_id, $request->category_id));
            $subCategory = SubCategory::findOrFail($request->sub_category_id);
            $subCategory->update($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Sub Category updated successfully', 'code' => 200, 'data' => $subCategory]);
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

            $subCategory = SubCategory::findOrFail($request->sub_category_id);
            $subCategory->deletet_by = $request->deleted_by;
            $subCategory->delete();
            return response()->json(['status' => 'Success', 'message' => 'Sub Category deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}

<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Http\Helper\Helpers;
use Illuminate\Http\Request;
use App\Models\Category\Category;
use App\Models\Category\SubCategory;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    private $domainToken = '1a32e71a46317b9cc6feb7388238c95d';

    private function user_authentication($token)
    {
        return $token === $this->domainToken;
    }

    public function index(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $searchTerm = $request->input('category_search');

            $categories = Category::where('status', 'Active')
                ->whereNull('deleted_at')
                ->where(function ($query) use ($searchTerm) {
                    $query->where('name', 'like', '%' . $searchTerm . '%')
                        ->orWhereHas('sub_category', function ($subQuery) use ($searchTerm) {
                            $subQuery->where('sub_category_name', 'like', '%' . $searchTerm . '%')
                                ->where('status', 'Active');
                        });
                })
                ->with(['sub_category' => function ($query) use ($searchTerm) {
                    $query->where('status', 'Active')
                        ->where('sub_category_name', 'like', '%' . $searchTerm . '%')
                        ->whereNull('deleted_at');
                }])
                ->get();
            return response()->json(['status' => 'Success', 'message' => 'Category retrieved successfully', 'code'=>200, 'total_count' => count($categories), 'data' => $categories], 200);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $validator = validator()->make($request->all(), Category::rules());

            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                $errorMessage = implode(' ', $errors);
                return response()->json(['status' => 'error', 'code' => 500, 'message' => $errorMessage], 500);
            }
            if ($request->status == 'Inactive') {
                $request['inactive_date'] = Carbon::now()->format('Y-m-d');
            }else{
                $request['inactive_date'] = null;
            }
            $category = Category::create($request->all());
            if (isset($category) && !empty($category)) {
                $history['history_type'] = 'category';
                $history['data_id'] = $category->id;
                $history['action_by'] = 1;
                $history['created_by'] = 1;
                $history['action_type'] = 'create';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Category created successfully', 'code' => 200, 'data' => $category]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function show(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $category = Category::with(['sub_category'])->findOrFail($request->category_id);
            return response()->json(['status' => 'Success', 'message' => 'Category retrieved successfully', 'code' => 200 , 'data' => $category]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function update(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $validator = validator()->make($request->all(), Category::rules($request->category_id));
            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                $errorMessage = implode(' ', $errors);
                return response()->json(['status' => 'error', 'code' => 500, 'message' => $errorMessage], 500);
            }
            if ($request->status == 'Inactive') {
                $request['inactive_date'] = Carbon::now()->format('Y-m-d');
            }else{
                $request['inactive_date'] = null;
            }
            $category = Category::findOrFail($request->category_id);
            $category->update($request->all());
            if (isset($category) && !empty($category)) {
                $history['history_type'] = 'category';
                $history['data_id'] = $category->id;
                $history['action_by'] = 1;
                $history['updated_by'] = 1;
                $history['action_type'] = 'update';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Category updated successfully', 'code' => 200, 'data' => $category]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function destroy(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $category = Category::findOrFail($request->category_id);
            if (isset($category) && !empty($category)) {
                $category->deleted_by = $request->deleted_by;
                $category->deleted_reason = $request->deleted_reason;
                $category->deleted_at = Carbon::now();
                $category->save();

                $history['history_type'] = 'category';
                $history['data_id'] = $category->id;
                $history['action_by'] = 1;
                $history['deleted_by'] = 1;
                $history['action_type'] = 'delete';
                Helpers::getHistoryData($history);
                if (isset($category) && !empty($category)) {
                    $sub_categories = SubCategory::where('category_id', $category->id)->get();
                    if (isset($sub_categories) && !empty($sub_categories)) {
                        foreach ($sub_categories as $key => $sub_category) {
                            $sub_category->deleted_by = $request->deleted_by;
                            $sub_category->deleted_reason = $request->deleted_reason;
                            $sub_category->deleted_at = Carbon::now();
                            $sub_category->save();

                            $history['history_type'] = 'sub_category';
                            $history['data_id'] = $sub_category->id;
                            $history['action_by'] = 1;
                            $history['deleted_by'] = 1;
                            $history['action_type'] = 'delete';
                        }
                    }
                }
            }
            return response()->json(['status' => 'Success', 'message' => 'Category deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemCategory(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = Category::select('id', 'name as categories')->where('status', 'Active')->whereNull('deleted_at')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Category retrieved successfully', 'code' => 200, 'categories' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemSubCategory(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = SubCategory::where('category_id', $request->item_category_id)->where('status', 'Active')
                ->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Sub Category retrieved successfully', 'code' => 200, 'sub_categories' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
}

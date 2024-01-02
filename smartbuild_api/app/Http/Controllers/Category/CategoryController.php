<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category\Category;

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
            $token = $request->query('token');

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $sizes = Category::all();
            return response()->json(['status' => 'success', 'data' => $sizes], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $token = $request->query('token');

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $request->validate(Category::$rules);
            $size = Category::create($request->all());
            return response()->json(['status' => 'success', 'data' => $size], 201);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function show(Request $request, $id)
    {
        try {
            $token = $request->query('token');

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $size = Category::findOrFail($id);
            return response()->json(['status' => 'success', 'data' => $size], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $token = $request->query('token');

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $size = Category::findOrFail($id);
            $size->update($request->all());
            return response()->json(['status' => 'success', 'data' => $size], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy(Request $request, $id)
    {
        try {
            $token = $request->query('token');

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $size = Category::findOrFail($id);
            $size->delete();
            return response()->json(['status' => 'success', 'message' => 'Category deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}

<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vendor\Vendor;

class VendorController extends Controller
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

            $vendors = Vendor::all();
            return response()->json(['status' => 'Success', 'message' => 'Vendor retrieved successfully', 'code' => 200, 'data' => $vendors], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {

        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = $request->validate(Vendor::rules());
            $vendor = Vendor::create($request->all());

            return response()->json(['status' => 'Success', 'message' => 'Vendor created successfully', 'code' => 200, 'data' => $vendor]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function show(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $vendor = Vendor::findOrFail($request->vendor_id);
            return response()->json(['status' => 'Success', 'message' => 'Vendor retrieved successfully', 'code' => 200 , 'data' => $vendor]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }

    public function update(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = $request->validate(Vendor::rules($request->vendor_id));
            $vendor = Vendor::findOrFail($request->vendor_id);
            $vendor->update($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Vendors updated successfully', 'code' => 200, 'data' => $vendor]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $vendor = Vendor::findOrFail($request->vendor_id);
            $vendor->delete();
            return response()->json(['status' => 'Success', 'message' => 'Vendors deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}

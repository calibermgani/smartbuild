<?php

namespace App\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use App\Http\Helper\Helpers;
use Illuminate\Http\Request;
use App\Models\Vendor\Vendor;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

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

            $vendors = Vendor::orderBy('id', 'desc')->get();
            return response()->json(['status' => 'Success', 'message' => 'Vendor retrieved successfully', 'code' => 200, 'data' => $vendors], 200);
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
            $validator = validator()->make($request->all(), Vendor::rules());
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
            $vendor = Vendor::create($request->all());
            if (isset($vendor) && !empty($vendor)) {
                $history['history_type'] = 'vendor';
                $history['data_id'] = $vendor->id;
                $history['action_by'] = 1;
                $history['created_by'] = 1;
                $history['action_type'] = 'create';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Vendor created successfully', 'code' => 200, 'data' => $vendor]);
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

            $vendor = Vendor::findOrFail($request->vendor_id);
            return response()->json(['status' => 'Success', 'message' => 'Vendor retrieved successfully', 'code' => 200 , 'data' => $vendor]);
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
            $validator = validator()->make($request->all(), Vendor::rules($request->vendor_id));
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
            $vendor = Vendor::findOrFail($request->vendor_id);
            $vendor->update($request->all());
            if (isset($vendor) && !empty($vendor)) {
                $history['history_type'] = 'vendor';
                $history['data_id'] = $vendor->id;
                $history['action_by'] = 1;
                $history['updated_by'] = 1;
                $history['action_type'] = 'update';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Vendors updated successfully', 'code' => 200, 'data' => $vendor]);
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

            $vendor = Vendor::findOrFail($request->vendor_id);
            if (isset($vendor) && !empty($vendor)) {
                $vendor->deleted_by = $request->deleted_by;
                $vendor->deleted_reason = $request->deleted_reason;
                $vendor->deleted_at = Carbon::now();
                $vendor->save();

                $history['history_type'] = 'vendor';
                $history['data_id'] = $vendor->id;
                $history['action_by'] = 1;
                $history['deleted_by'] = 1;
                $history['action_type'] = 'delete';
                Helpers::getHistoryData($history);
            }
            return response()->json(['status' => 'Success', 'message' => 'Vendors deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
    public function itemVendor(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = Vendor::where('status', 'Active')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Vendors retrieved successfully', 'code' => 200, 'vendors' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }
}

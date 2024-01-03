<?php

namespace App\Http\Controllers\Material;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Material\Material;


class MaterialController extends Controller
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

            $materials = Material::leftJoin('categories', 'materials.items_category', '=', 'categories.id')
                        ->leftJoin('sizes', 'materials.size', '=', 'sizes.id')
                        ->leftJoin('vendors', 'materials.vendor', '=', 'vendors.id')
                        ->leftJoin('units', 'materials.unit', '=', 'units.id')
                        ->select( 'materials.id as materialsID','materials.item_no','materials.item_name','categories.name as category_name','materials.item_description',
                                   'materials.procedure','materials.cat_no','materials.lot_no','sizes.size_name as size_name','vendors.VendorName as vendor_name','materials.price',
                                   'units.UnitName as unit_name','materials.expiry_date','materials.on_hand_qty','materials.min_level','materials.tags','materials.notes',
                                   'materials.images','materials.barcodes', 'materials.added_by', 'materials.created_at', 'materials.updated_at')
                        ->get();
            return response()->json(['status' => 'Success', 'message' => 'Material retrieved successfully', 'code' => 200 , 'data' => $materials], 200);
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
            $request->validate(Material::$rules);
            $material = Material::create($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Material created successfully', 'code' => 200]);
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

            $material = Material::leftJoin('categories', 'materials.items_category', '=', 'categories.id')
                        ->leftJoin('sizes', 'materials.size', '=', 'sizes.id')
                        ->leftJoin('vendors', 'materials.vendor', '=', 'vendors.id')
                        ->leftJoin('units', 'materials.unit', '=', 'units.id')
                        ->select( 'materials.id as materialsID','materials.item_no','materials.item_name','categories.name as category_name','materials.item_description',
                                  'materials.procedure','materials.cat_no','materials.lot_no','sizes.size_name as size_name','vendors.VendorName as vendor_name','materials.price',
                                  'units.UnitName as unit_name','materials.expiry_date','materials.on_hand_qty','materials.min_level','materials.tags','materials.notes',
                                  'materials.images','materials.barcodes', 'materials.added_by', 'materials.created_at', 'materials.updated_at')
                        ->findOrFail($id);
            return response()->json(['status' => 'Success', 'message' => 'Material retrieved successfully', 'code' => 200 , 'data' => $material]);
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

            $size = Material::findOrFail($id);
            $size->update($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Material updated successfully', 'code' => 200]);
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

            $size = Material::findOrFail($id);
            $size->delete();
            return response()->json(['status' => 'Success', 'message' => 'Material deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}



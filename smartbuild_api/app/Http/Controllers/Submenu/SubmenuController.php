<?php

namespace App\Http\Controllers\Submenu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Submenu\Submenu;

class SubmenuController extends Controller
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

            $submenus = Submenu::join('menus', 'submenus.menu_id', '=', 'menus.id')
            ->select('submenus.id as submenu_id', 'submenus.menu_id', 'submenus.submenu_name', 'submenus.submenu_description', 'menus.menu_name')
            ->get();
                       
            return response()->json(['status' => 'Success', 'message' => 'Submenu retrieved successfully', 'code' => 200,'data' => $submenus], 200);
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

            $Submenu = Submenu::create($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Submenu created successfully', 'code' => 200]);
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

            $Submenu = Submenu::join('menus', 'submenus.menu_id', '=', 'menus.id')
                       ->select('submenus.*', 'menus.menu_name', 'menus.menu_description', 'menus.status as menu_status')
                       ->findOrFail($id);

            return response()->json(['status' => 'Success', 'message' => 'Submenu retrieved successfully', 'code' => 200, 'data' => $Submenu], 200);
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

            $Submenu = Submenu::findOrFail($id);
            $Submenu->update($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Submenu updated successfully', 'code' => 200]);
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

            $Submenu = Submenu::findOrFail($id);
            $Submenu->delete();
            return response()->json(['status' => 'Success', 'message' => 'Submenu deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}

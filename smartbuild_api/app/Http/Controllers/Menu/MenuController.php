<?php

namespace App\Http\Controllers\Menu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu\Menu;
use App\Models\Submenu\Submenu;

class MenuController extends Controller
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

            $menus = Menu::select('id', 'menu_name', 'menu_description', 'icon', 'link','status', 'added_by', 'deleted_at', 'created_at', 'updated_at')
                   ->get();
    
            if ($menus->isEmpty()) {
                return response()->json(['status' => 'error', 'code' => 404, 'message' => 'No matching menu records found'], 404);
            }
    
            // Fetch submenus for each menu item
            $menus->each(function ($menu) {
                    $submenus = Submenu::where('menu_id', $menu->id)->get(['id', 'menu_id', 'submenu_name', 'submenu_description','link','icon']);
                    $menu->submenus = $submenus->isEmpty() ? null : $submenus;
                });

            return response()->json(['status' => 'Success', 'message' => 'Menu retrieved successfully', 'code' => 200,'data' => $menus], 200);
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

            $Menu = Menu::create($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Menu created successfully', 'code' => 200]);
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
    
            $menu = Menu::select('id', 'menu_name', 'menu_description', 'icon', 'link', 'status', 'added_by', 'deleted_at', 'created_at', 'updated_at')
                  ->findOrFail($id);
    
            if (!$menu) {
                return response()->json(['status' => 'error', 'code' => 404, 'message' => 'No matching menu records found'], 404);
            }
    
            // Fetch submenus for the menu item
            $submenus = Submenu::where('menu_id', $menu->id)->get(['id', 'menu_id', 'submenu_name', 'submenu_description']);
            $menu->submenus = $submenus->isEmpty() ? null : $submenus;
    
            return response()->json(['status' => 'Success', 'message' => 'Menu retrieved successfully', 'code' => 200, 'data' => $menu], 200);
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

            $Menu = Menu::findOrFail($id);
            $Menu->update($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Menu updated successfully', 'code' => 200]);
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

            $Menu = Menu::findOrFail($id);
            $Menu->delete();
            return response()->json(['status' => 'Success', 'message' => 'Menu deleted successfully', 'code' => 200]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}

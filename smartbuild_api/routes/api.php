<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Category\SubCategoryController;
use App\Http\Controllers\Unit\UnitController;
use App\Http\Controllers\Vendor\VendorController;
use App\Http\Controllers\Size\SizeController;
use App\Http\Controllers\Material\MaterialController;
use App\Http\Controllers\Menu\MenuController;
use App\Http\Controllers\Submenu\SubmenuController;
use App\Http\Controllers\Item\ItemController;
use App\Http\Controllers\Tag\TagsController;
use App\Http\Controllers\Procedure\ProcedureController;

// header('Access-Control-Allow-Origin:  *');
// header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, PATCH, DELETE');
// header('Access-Control-Allow-Headers: Accept, Content-Type, X-Auth-Token, Origin, Authorization');



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::prefix('categories')->group(function () {
    Route::any('/index', [CategoryController::class, 'index']);
    Route::any('/store', [CategoryController::class, 'store']);
    Route::any('/show', [CategoryController::class, 'show']);
    Route::any('/update', [CategoryController::class, 'update']);
    Route::any('/destroy', [CategoryController::class, 'destroy']);
    Route::any('/item_category', [CategoryController::class, 'itemCategory']);
    Route::any('/item_sub_category', [CategoryController::class, 'itemSubCategory']);
});

Route::prefix('sub_categories')->group(function () {
    Route::any('/index', [SubCategoryController::class, 'index']);
    Route::any('/store', [SubCategoryController::class, 'store']);
    Route::any('/show', [SubCategoryController::class, 'show']);
    Route::any('/update', [SubCategoryController::class, 'update']);
    Route::any('/destroy', [SubCategoryController::class, 'destroy']);
});


Route::prefix('units')->group(function () {
    Route::get('/', [UnitController::class, 'index']);
    Route::post('/', [UnitController::class, 'store']);
    Route::get('/{id}', [UnitController::class, 'show']);
    Route::put('/{id}', [UnitController::class, 'update']);
    Route::delete('/{id}', [UnitController::class, 'destroy']);
});

Route::prefix('vendors')->group(function () {
    Route::any('/index', [VendorController::class, 'index']);
    Route::any('/store', [VendorController::class, 'store']);
    Route::any('/show', [VendorController::class, 'show']);
    Route::any('/update', [VendorController::class, 'update']);
    Route::any('/destroy', [VendorController::class, 'destroy']);
    Route::any('/item_vendor', [VendorController::class, 'itemVendor']);
});

Route::prefix('items')->group(function () {
    Route::any('/index', [ItemController::class, 'index']);
    Route::any('/store', [ItemController::class, 'store']);
    Route::any('/show', [ItemController::class, 'show']);
    Route::any('/update', [ItemController::class, 'update']);
    Route::any('/destroy', [ItemController::class, 'destroy']);
    Route::any('/item_quantity_update', [ItemController::class, 'itemQuantityUpdate']);
    Route::any('/item_tags_update', [ItemController::class, 'itemTagsUpdate']);
    Route::any('/item_clone', [ItemController::class, 'itemClone']);
    Route::any('/item_move', [ItemController::class, 'itemMove']);
    Route::any('/item_bulk_edit', [ItemController::class, 'itemBulkEdit']);
});

Route::prefix('sizes')->group(function () {
    Route::get('/', [SizeController::class, 'index']);
    Route::post('/index', [SizeController::class, 'store']);
    Route::get('/{id}', [SizeController::class, 'show']);
    Route::put('/{id}', [SizeController::class, 'update']);
    Route::delete('/{id}', [SizeController::class, 'destroy']);
});

Route::prefix('tags')->group(function () {
    Route::any('/store', [TagsController::class, 'store']);
    Route::any('/item_tags', [TagsController::class, 'itemTags']);
});

Route::prefix('materials')->group(function () {
    Route::get('/', [MaterialController::class, 'index']);
    Route::post('/', [MaterialController::class, 'store']);
    Route::get('/{id}', [MaterialController::class, 'show']);
    Route::put('/{id}', [MaterialController::class, 'update']);
    Route::delete('/{id}', [MaterialController::class, 'destroy']);
});

Route::prefix('menu')->group(function () {
    Route::get('/', [MenuController::class, 'index']);
    Route::post('/', [MenuController::class, 'store']);
    Route::get('/{id}', [MenuController::class, 'show']);
    Route::put('/{id}', [MenuController::class, 'update']);
    Route::delete('/{id}', [MenuController::class, 'destroy']);
});

Route::prefix('submenu')->group(function () {
    Route::get('/', [SubmenuController::class, 'index']);
    Route::post('/', [SubmenuController::class, 'store']);
    Route::get('/{id}', [SubmenuController::class, 'show']);
    Route::put('/{id}', [SubmenuController::class, 'update']);
    Route::delete('/{id}', [SubmenuController::class, 'destroy']);
});

Route::prefix('procedures')->group(function () {
    Route::any('/index', [ProcedureController::class, 'index']);
    Route::any('/store', [ProcedureController::class, 'store']);
    Route::any('/item_procedures', [ProcedureController::class, 'itemProcedures']);
});




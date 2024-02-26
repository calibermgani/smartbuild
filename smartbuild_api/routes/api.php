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

header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, PATCH, DELETE');
header('Access-Control-Allow-Headers: Accept, Content-Type, X-Auth-Token, Origin, Authorization');



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
    Route::get('/', [CategoryController::class, 'index']);
    Route::post('/', [CategoryController::class, 'store']);
    Route::get('/show', [CategoryController::class, 'show']);
    Route::put('/update', [CategoryController::class, 'update']);
    Route::delete('/destroy', [CategoryController::class, 'destroy']);
});

Route::prefix('sub_categories')->group(function () {
    Route::get('/', [SubCategoryController::class, 'index']);
    Route::post('/', [SubCategoryController::class, 'store']);
    Route::get('/show', [SubCategoryController::class, 'show']);
    Route::put('/update', [SubCategoryController::class, 'update']);
    Route::delete('/destroy', [SubCategoryController::class, 'destroy']);
});


Route::prefix('units')->group(function () {
    Route::get('/', [UnitController::class, 'index']);
    Route::post('/', [UnitController::class, 'store']);
    Route::get('/{id}', [UnitController::class, 'show']);
    Route::put('/{id}', [UnitController::class, 'update']);
    Route::delete('/{id}', [UnitController::class, 'destroy']);
});

Route::prefix('vendors')->group(function () {
    Route::get('/', [VendorController::class, 'index']);
    Route::post('/', [VendorController::class, 'store']);
    Route::get('/show', [VendorController::class, 'show']);
    Route::put('/update', [VendorController::class, 'update']);
    Route::delete('/destroy', [VendorController::class, 'destroy']);
});

Route::prefix('items')->group(function () {
    Route::get('/', [ItemController::class, 'index']);
    Route::post('/', [ItemController::class, 'store']);
    Route::get('/show', [ItemController::class, 'show']);
    Route::put('/update', [ItemController::class, 'update']);
    Route::delete('/destroy', [ItemController::class, 'destroy']);
    Route::post('/item_quantity_update', [ItemController::class, 'itemQuantityUpdate']);
});

Route::prefix('sizes')->group(function () {
    Route::get('/', [SizeController::class, 'index']);
    Route::post('/index', [SizeController::class, 'store']);
    Route::get('/{id}', [SizeController::class, 'show']);
    Route::put('/{id}', [SizeController::class, 'update']);
    Route::delete('/{id}', [SizeController::class, 'destroy']);
});

Route::prefix('tags')->group(function () {
    Route::post('/', [TagsController::class, 'store']);
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




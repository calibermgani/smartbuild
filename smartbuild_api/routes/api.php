<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Unit\UnitController;
use App\Http\Controllers\Vendor\VendorController;
use App\Http\Controllers\Size\SizeController;
use App\Http\Controllers\Material\MaterialController;
use App\Http\Controllers\Menu\MenuController;
use App\Http\Controllers\Submenu\SubmenuController;




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
    Route::get('/{size}', [CategoryController::class, 'show']);
    Route::put('/{size}', [CategoryController::class, 'update']);
    Route::delete('/{size}', [CategoryController::class, 'destroy']);
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
    Route::get('/{id}', [VendorController::class, 'show']);
    Route::put('/{id}', [VendorController::class, 'update']);
    Route::delete('/{id}', [VendorController::class, 'destroy']);
});

// Route::prefix('sizes')->group(function () {
//     Route::get('/index', [SizeController::class, 'index']);
//     Route::post('/', [SizeController::class, 'store']);
//     Route::get('/{id}', [SizeController::class, 'show']);
//     Route::put('/{id}', [SizeController::class, 'update']); 
//     Route::delete('/{id}', [SizeController::class, 'destroy']);
// });

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


Route::prefix('api')->middleware('api')->group(function () {
    Route::get('/sizes', 'SizeController@index');
});

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
    Route::any('/item_set_alert', [ItemController::class, 'itemSetAlert']);
    Route::any('/item_recall', [ItemController::class, 'itemRecall']);
    Route::any('/item_refill_to_cabinet', [ItemController::class, 'itemRefillToCabinet']);
    Route::any('/near_expired_items', [ItemController::class, 'nearExpiredItems']);
    Route::any('/trashed_items', [ItemController::class, 'trashedItems']);
    Route::any('/restored_items', [ItemController::class, 'restoredItems']);
    Route::any('/items_category_search', [ItemController::class, 'itemsCategorySearch']);
    Route::any('/inactive_items', [ItemController::class, 'inactiveItems']);
    Route::any('/restored_inactive_items', [ItemController::class, 'restoredInactiveItems']);
    Route::any('/item_low_stock', [ItemController::class, 'itemLowStock']);
    Route::any('/item_history_details', [ItemController::class, 'itemHistoryDetails']);
    Route::any('/procedure_item_dashboard', [ItemController::class, 'procedureItemDashboard']);
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
    Route::any('/item_damaged', [ProcedureController::class, 'itemDamagedList']);
    Route::any('/item_wasted', [ProcedureController::class, 'itemWastedList']);
    Route::any('/item_history', [ProcedureController::class, 'itemHistory']);
    Route::any('/patient_procedure_list', [ProcedureController::class, 'patientProcedureList']);
    Route::any('/patient_procedure_details', [ProcedureController::class, 'patientProcedureDetails']);
    Route::any('/patient_import', [ProcedureController::class, 'patientImport']);
    Route::any('/material_my_cart', [ProcedureController::class, 'materialMyCart']);
    Route::any('/patient_request', [ProcedureController::class, 'patientRequest']);
    Route::any('/vetting_types', [ProcedureController::class, 'vettingTypes']);
    Route::any('/store_vetting_request', [ProcedureController::class, 'storeVettingRequest']);
    Route::any('/protocol_types', [ProcedureController::class, 'protocolTypes']);
    Route::any('/store_protocol_request', [ProcedureController::class, 'storeProtocolRequest']);
    Route::any('/store_shopping_cart', [ProcedureController::class, 'storeShoppingCart']);
    Route::any('/check_list_index', [ProcedureController::class, 'checkListIndex']);
    Route::any('/add_your_protocol', [ProcedureController::class, 'addYourProtocol']);
    Route::any('/vetting_protocol_index', [ProcedureController::class, 'vettingProtocolIndex']);
    Route::any('/intra_procedure_index', [ProcedureController::class, 'intraProcedureIndex']);
    Route::any('/store_intra_procedure', [ProcedureController::class, 'storeIntraProcedure']);
    Route::any('/used_data', [ProcedureController::class, 'usedData']);
    Route::any('/damaged_data', [ProcedureController::class, 'damagedData']);
    Route::any('/returned_data', [ProcedureController::class, 'returnedData']);
    Route::any('/wasted_data', [ProcedureController::class, 'wastedData']);
    Route::any('/back_to_cabinet', [ProcedureController::class, 'backToCabinetList']);
    Route::any('/daily_consumed', [ProcedureController::class, 'dailyConsumed']);
    Route::any('/item_unique_list', [ProcedureController::class, 'itemUniqueList']);
    Route::any('/procedure_sub_status', [ProcedureController::class, 'procedureSubStatus']);
    Route::any('/store_patient_details', [ProcedureController::class, 'storePatientDetails']);
    Route::any('/ch_pre_diagnosis_index', [ProcedureController::class, 'chPreDiagnosisIndex']);
    Route::any('/show_vetting_protocol_request', [ProcedureController::class, 'showVettingProtocolRequest']);
    // Route::any('/show_protocol_request', [ProcedureController::class, 'showProtocolRequest']);
    Route::any('/ch_pre_diagnosis_store', [ProcedureController::class, 'chPreDiagnosisStore']);
    Route::any('/ch_pre_diagnosis_delete', [ProcedureController::class, 'chPreDiagnosisDelete']);
    Route::any('/patient_registration_list', [ProcedureController::class, 'patientRegistrationList']);
    Route::any('/ch_indication_index', [ProcedureController::class, 'chIndicationIndex']);
    Route::any('/ch_post_diagnosis_index', [ProcedureController::class, 'chPostDiagnosisIndex']);
    Route::any('/patient_lab_index', [ProcedureController::class, 'patientLabIndex']);
    Route::any('/patient_mediation_index', [ProcedureController::class, 'patientMediationIndex']);
    Route::any('/ch_indication_store', [ProcedureController::class, 'chIndicationStore']);
    Route::any('/ch_post_diagnosis_store', [ProcedureController::class, 'chPostDiagnosisStore']);
    Route::any('/ch_indication_delete', [ProcedureController::class, 'chIndicationDelete']);
    Route::any('/ch_post_diagnosis_delete', [ProcedureController::class, 'chPostDiagnosisDelete']);
    Route::any('/patient_lab_store', [ProcedureController::class, 'patientLabStore']);
    Route::any('/patient_lab_delete', [ProcedureController::class, 'patientLabDelete']);
    Route::any('/patient_mediation_store', [ProcedureController::class, 'patientMediationStore']);
    Route::any('/patient_mediation_delete', [ProcedureController::class, 'patientMediationDelete']);
    Route::any('/patient_list', [ProcedureController::class, 'patientList']);
    Route::any('/patient_details', [ProcedureController::class, 'patientDetails']);
    Route::any('/patient_procedure_request', [ProcedureController::class, 'patientProcedureRequest']);
    Route::any('/patient_details_update', [ProcedureController::class, 'patientDetailsUpdate']);
    Route::any('/patient_details_delete', [ProcedureController::class, 'patientDetailsDelete']);
});




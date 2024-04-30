<?php

namespace App\Http\Controllers\Procedure;

use App\Http\Controllers\Controller;
use App\Imports\PatientDataImport;
use App\Models\Item\ItemHistory;
use App\Models\Procedure\AddYourProtocol;
use App\Models\Procedure\CheckList;
use App\Models\Procedure\PatientsInformation;
use App\Models\Procedure\PatientsRequest;
use App\Models\Procedure\ProcedureItemType;
use App\Models\Procedure\PatientRequestProtocolling;
use App\Models\Procedure\PatientRequestVetting;
use App\Models\Procedure\ProtocolType;
use App\Models\Procedure\ShoppingCart;
use App\Models\Procedure\ShoppingTypes;
use App\Models\Procedure\VettingTypes;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Procedure\Procedure;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ProcedureController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    private $domainToken = '1a32e71a46317b9cc6feb7388238c95d';

    private function user_authentication($token)
    {
        return $token === $this->domainToken;
    }
    public function index(Request $request)
    {
        {
            try {
                $token = $request->token;

                if (!$this->user_authentication($token)) {
                    return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
                }

                $procedures = Procedure::get();
                return response()->json(['status' => 'Success', 'message' => 'Procedure retrieved successfully', 'code'=>200, 'data' => $procedures], 200);
            } catch (\Exception $e) {
                Log::debug($e->getMessage());
                return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
            }
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data = $request->validate(Procedure::rules());
            $procedures = Procedure::create($request->all());
            return response()->json(['status' => 'Success', 'message' => 'Sub Category created successfully', 'code' => 200, 'data' => $procedures]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function itemProcedures(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = Procedure::select('id','procedure_name')->where('status', 'Active')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Procedure retrieved successfully', 'code' => 200, 'procedures' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemDamagedList(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = ProcedureItemType::with(['procedure', 'item'])->where('type', 'Damaged')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Damaged Item retrieved successfully', 'code' => 200, 'total_count' => count($data), 'item_damaged_list' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemWastedList(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = ProcedureItemType::with(['procedure', 'item'])->where('type', 'Wasted')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Damaged Item retrieved successfully', 'code' => 200, 'total_count' => count($data), 'item_wasted_list' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function itemHistory(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data['item'] = ItemHistory::with([
                'item_history',
                'item_history.item_category',
                'item_history.item_sub_category',
                'item_history.item_vendor',
                'item_history.item_procedures',
                ])
                ->where('history_type_id', '1')
                ->get();
            $itemsWithImageUrl = $data['item']->map(function ($item) {
                if ($item->image_url) {
                    $imageUrl = Storage::url('item_images/'.$item->spid.'/'.$item->image_url);
                } else {
                    $imageUrl = null;
                }
                $item->setAttribute('image_url', $imageUrl);
                return $item;
            });
            $data['category'] = ItemHistory::with(['category_history', 'category_history.sub_category'])->where('history_type_id', '2')->get();
            $data['sub_category'] = ItemHistory::with(['sub_category_history', 'sub_category_history.category'])->where('history_type_id', '3')->get();
            $data['vendor'] = ItemHistory::with(['vendor_history'])->where('history_type_id', '4')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Item history retrieved successfully', 'code' => 200, 'item_history' => $data]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function patientList(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = PatientsInformation::select([
                DB::raw("true as checkboxSelection"),
                'id as id',
                DB::raw("CONCAT(first_name, ' ', middle_name) as 'Name'"),
                'mrn_no as MRN',
                'gender as Gender',
                'patient_type as Type',
                'dob as DOB',
                'age as Age',
                'location as Location',
                'exam_status as Exam Status',
                'study_id as Study ID',
                'priority as Priority',
                'procedure_status as Procedure Status',
                'study_date_time as Study Date And Time',
                'accession_no as Accession Number',
                'requesting_physician as Requesting Physician',
                'specialty as Speciality',
                'language as Language',
                'blood_group as Blood',
                'weight as Weight',
                'height as Height',
                'procedure as Procedure Name',
            ])->get();

            $checkBox = $data->map(function ($data) {
                $data->setAttribute('checkboxSelection', true);
                return $data;
            });
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Patient List data retrieved successfully', 'code' => 200, 'total_count' => count($data), 'patient_list' => $data]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function patientDetails(Request $request){
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data = PatientsInformation::select('*', DB::raw('concat(first_name, " ", middle_name) as patient_name'))->where('id', $request->patient_id)->first();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Patient data retrieved successfully', 'code' => 200, 'patient' => $data]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function patientImport(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            // if ($request->attachment != '') {
            //     $attachmentName = $request->attachment->getClientOriginalName();
            //     $extension = $request->attachment->getClientOriginalExtension();
            //     $onlyFileName = pathinfo($attachmentName, PATHINFO_FILENAME);
            //     $fileName = str_replace(' ', '_', $onlyFileName);
            //     $fileNames = $fileName . '_' . date('YmdHis') . '.' . $extension;

            //     if (!Storage::exists('public/importFiles')) {
            //         $storage_path = Storage::makeDirectory('importFiles', 0775, true);
            //         $path = $request->attachment->storeAs('public/importFiles/', $fileNames);
            //     } else {
            //         $path = $request->attachment->storeAs('public/importFiles/', $fileNames);
            //     }
            //     $import_data = new PatientDataImport($fileNames);
            // }

            return response()->json(['status' => 'Success', 'message' => 'Patient data retrieved successfully', 'code' => 200]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function materialMyCart(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $procedure = Procedure::with(['procedure_item', 'procedure_item.item_details'])
                ->whereHas('procedure_item.item_details' , function ($query) {
                    $query->where('status', 'Active');
                })
                ->where('procedure_name', 'like', '%' . $request->procedure . '%')
                ->first();
            if (empty($procedure)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Matrial data retrieved successfully', 'code' => 200, 'my_cart' => $procedure]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function patientRequest(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $patientRequest = PatientsRequest::create($request->all());
            if (empty($patientRequest)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Patient request created successfully', 'code' => 200, 'patient_request' => $patientRequest]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function vettingTypes(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $types = VettingTypes::get();
            if (empty($types)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Vetting types retrieved successfully', 'code' => 200, 'total_count' => count($types), 'vetting_types' => $types]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function storeVettingRequest(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $vetting_request = PatientRequestVetting::where('patient_id', $request->patient_id)->first();
            if (isset($vetting_request) && !empty($vetting_request)) {
                $vetting_request->update($request->all());
                $data = $vetting_request;
            }else{
                $data = PatientRequestVetting::create($request->all());
            }
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Vetting request created or updated successfully', 'code' => 200, 'vetting_request' => $data]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function protocolTypes(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $types = ProtocolType::get();
            if (empty($types)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Protocol types retrieved successfully', 'code' => 200, 'total_count' => count($types), 'protocol_types' => $types]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function storeProtocolRequest(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $protocol_request = PatientRequestProtocolling::where('patient_id', $request->patient_id)->first();
            if (isset($protocol_request) && !empty($protocol_request)) {
                $protocol_request->update($request->all());
                $data = $protocol_request;
            } else {
                $data = PatientRequestProtocolling::create($request->all());
            }

            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Protocol request created or updated successfully', 'code' => 200, 'protocol_request' => $data]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function storeShoppingCart(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->stage_type) && $request->stage_type != null) {
                $stage_type = ShoppingTypes::where('name', $request->stage_type)->first();
                $request['stage_type_id'] = $stage_type->id;
            } else {
                $request['stage_type_id'] = null;
            }
            $request['purchased_date'] = Carbon::now()->format('Y-m-d');
            if (isset($request->item_id) &&count($request->item_id) > 0) {
                if (is_array($request->quantity)) {
                    foreach ($request->item_id as $key => $item) {
                        if (isset($request->quantity[$key])) {
                            $requestData = $request->all();
                            $requestData['item_id'] = $item;
                            $requestData['quantity'] = $request->quantity[$key];
                            $data = ShoppingCart::create($requestData);
                        }
                    }
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Shopping cart created successfully', 'code' => 200, 'shopping_cart' => $data]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function checkListIndex(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data['requesting'] = CheckList::where('check_list_stage', 'Requesting')->get();
            $data['scheduling'] = CheckList::where('check_list_stage', 'Scheduling')->get();
            $data['pre_procedure'] = CheckList::where('check_list_stage', 'Pre-procedure')->get();
            $data['intra_procedure'] = CheckList::where('check_list_stage', 'Intra-procedure')->get();
            $data['post_procedure'] = CheckList::where('check_list_stage', 'Post-procedure')->get();
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Protocol request created successfully', 'code' => 200, 'check_list' => $data]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function addYourProtocol(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $types = AddYourProtocol::get();
            if (empty($types)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Add Your Protocol types retrieved successfully', 'code' => 200, 'total_count' => count($types), 'add_protocol_types' => $types]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function vettingProtocolIndex(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request->id) && isset($request->patient_id) && $request->id != null && $request->patient_id != null) {
                if ($request->id == "2") {
                    $data['vetting'] = PatientRequestVetting::where('patient_id', $request->patient_id)->first();
                    $data['protocoling'] = PatientRequestProtocolling::where('patient_id', $request->patient_id)->first();
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Patient request created successfully', 'code' => 200, 'data' => $data]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function intraProcedureIndex(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data = ShoppingCart::with('intra_procedure_items')->select([
                'item_id as item_id',
                DB::raw('sum(quantity) as quantity'),
                ])
                ->where('patient_id', $request->patient_id)
                ->groupBy('item_id')
                ->get();
            $itemQuantity = $data->map(function ($item) use ($request){
                $quantity = ProcedureItemType::select([
                    DB::raw('sum(no_of_qty) as no_of_qty'),
                ])
                    ->where('patient_id', $request->patient_id)
                    ->where('item_id', $item->item_id)
                    ->groupBy('item_id')
                    ->first();
                if ($quantity) {
                    $total_no_of_qty = $item->quantity - $quantity->no_of_qty;
                    $item->setAttribute('total_no_of_qty', $total_no_of_qty);
                } else {
                    $item->setAttribute('total_no_of_qty', $item->quantity);
                }
                return $item;
            });
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Intra Procedure items retrieved successfully', 'code' => 200, 'total_count' => count($data), 'intra_procedure_index' => $data]);
            }
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function storeIntraProcedure(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            $data = $request->all();
            if (isset($data['procedure']) && !empty($data['procedure'])) {
                $procedure = Procedure::where('procedure_name', $data['procedure'])->first();
                $data['procedure_id'] = $procedure->id;
            } else {
                $data['procedure_id'] = null;
            }
            if (isset($data['item_id']) && !empty($data['item_id'])) {
                ProcedureItemType::create($data);
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Intra Procedure items created successfully', 'code' => 200, 'store_intra_procedure' => $data]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}

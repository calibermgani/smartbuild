<?php

namespace App\Http\Controllers\Procedure;

use App\Http\Controllers\Controller;
use App\Imports\PatientDataImport;
use App\Models\Item\Item;
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

            $data = ProcedureItemType::with(['procedure', 'item'])->select([
                    'mrn_no',
                    'item_id',
                    'accession_no',
                    DB::raw('SUM(no_of_qty) as total_qty')
                ])
                    ->where('type', 'Damaged')
                    ->groupBy('mrn_no', 'item_id', 'accession_no')
                    ->get();
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

            $date_of_birth = $data->map(function ($data) {
                if (isset($data->DOB) && $data->DOB != null) {
                    $age = Carbon::parse($data->DOB)->age;

                    $data->setAttribute('Age', $age);
                }
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
            if (isset($data->dob) && $data->dob != null) {
                $dob = Carbon::parse($data->dob)->age;
                $data->setAttribute('age', $dob);
            }
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

            $procedure = Procedure::with([
                'procedure_item',
                'procedure_item.item_details' => function ($query) {
                    $query->where('item_entry_status', '!=', 'clone');}
                ])
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
            if(isset($patientRequest) && !empty($patientRequest)){
                $patientDetails = PatientsInformation::where('id', $patientRequest->patient_id)->first();
                if(isset($patientDetails) && !empty($patientDetails)){
                    $patientDetails->exam_status = $request->status;
                    $patientDetails->save();
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }

            return response()->json(['status' => 'Success', 'message' => 'Patient request created successfully', 'code' => 200, 'patient_request' => $patientRequest]);

        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
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
            if (isset($request['procedure']) && !empty($request['procedure'])) {
                $procedure = Procedure::where('procedure_name', $request['procedure'])->first();
                $request['procedure_id'] = $procedure->id;
            } else {
                $request['procedure_id'] = null;
            }
            if (isset($request->item_id) &&count($request->item_id) > 0) {
                if (is_array($request->quantity)) {
                    foreach ($request->item_id as $key => $item) {
                        $existingData = ShoppingCart::where('item_id', $item)
                            ->where('patient_id', $request->patient_id)
                            ->where('mrn_number', $request->mrn_number)
                            ->where('purchased_date', Carbon::now()->format('Y-m-d'))
                            ->where('stage_type_id', $request['stage_type_id'])
                            ->first();
                        if (isset($existingData)) {
                            $existingData->quantity = $request->quantity[$key];
                            $existingData->purchased_by = $request->purchased_by;
                            $existingData->created_by = $request->created_by;
                            $existingData->save();
                        } else {
                            if (isset($request->quantity[$key])) {
                                $requestData = $request->all();
                                $requestData['item_id'] = $item;
                                $requestData['quantity'] = $request->quantity[$key];
                                $data = ShoppingCart::create($requestData);
                            }
                        }
                    }
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Shopping cart created successfully', 'code' => 200]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
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
            if (isset($request['procedure']) && !empty($request['procedure'])) {
                $procedure = Procedure::where('procedure_name', $request['procedure'])->first();
                $procedure_id = $procedure->id;
            } else {
                $procedure_id = null;
            }
            $data = ShoppingCart::with('intra_procedure_items')->select([
                'item_id as item_id',
                DB::raw('sum(quantity) as quantity'),
                ])
                ->where('patient_id', $request->patient_id)
                ->where('mrn_number', $request->mrn_number)
                ->whereDate('purchased_date', Carbon::now()->format('Y-m-d'))
                ->where(function ($query) use ($procedure_id) {
                    if (isset($procedure_id) && $procedure_id != null) {
                        $query->where('procedure_id', $procedure_id);
                    } else {
                        $query;
                    }
                })
                ->groupBy('item_id')
                ->get();
            $itemQuantity = $data->map(function ($item) use ($request, $procedure_id){
                $quantity = ProcedureItemType::select([
                    DB::raw('sum(no_of_qty) as no_of_qty'),
                ])
                    ->where('patient_id', $request->patient_id)
                    ->where('item_id', $item->item_id)
                    ->where('mrn_no', $request->mrn_number)
                    ->whereDate('created_at', Carbon::now()->format('Y-m-d'))
                    ->where(function ($query) use ($procedure_id) {
                        if (isset($procedure_id) && $procedure_id != null) {
                            $query->where('procedure_id', $procedure_id);
                        } else {
                            $query;
                        }
                    })
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
            if (count($data['item_id']) > 0 && isset($data['item_id'])) {
                foreach ($data['item_id'] as $key => $item) {
                    $intra_procedure = new ProcedureItemType();
                    $intra_procedure->item_id = $item;
                    $intra_procedure->patient_id = $data['patient_id'];
                    $intra_procedure->procedure_id = $data['procedure_id'];
                    $intra_procedure->mrn_no = $data['mrn_no'];
                    $intra_procedure->accession_no = $data['accession_no'];
                    $intra_procedure->no_of_qty = $data['no_of_qty'][$key];
                    $intra_procedure->type = $data['type'][$key];
                    $intra_procedure->notes = $data['notes'][$key];
                    $intra_procedure->created_by = $data['created_by'];
                    $intra_procedure->save();
                    if ($intra_procedure->type == 'Used' || $intra_procedure->type == 'Damaged' || $intra_procedure->type == 'Wasted') {
                        $item = Item::where('id', $item)->first();
                        if(isset($item) && !empty($item)){
                            $item->store_qty = $item->store_qty - $data['no_of_qty'][$key];
                            $item->save();
                        }
                    }
                }
            } else {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Intra Procedure items created successfully', 'code' => 200, 'store_intra_procedure' => $intra_procedure]);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }


    public function usedData(Request $request){
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request['procedure']) && !empty($request['procedure'])) {
                $procedure = Procedure::where('procedure_name', $request['procedure'])->first();
                $request['procedure_id'] = $procedure->id;
            } else {
                $request['procedure_id'] = null;
            }
            $used_data = ProcedureItemType::with('item')
                ->where('patient_id', $request->patient_id)
                ->where('procedure_id', $request['procedure_id'])
                ->where('type', 'Used')
                ->get();
            if (empty($used_data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Used data retrieved successfully', 'code' => 200, 'used_data' => $used_data]);

        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function damagedData(Request $request){
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request['procedure']) && !empty($request['procedure'])) {
                $procedure = Procedure::where('procedure_name', $request['procedure'])->first();
                $request['procedure_id'] = $procedure->id;
            } else {
                $request['procedure_id'] = null;
            }
            $damaged_data = ProcedureItemType::with('item')
                ->where('patient_id', $request->patient_id)
                ->where('procedure_id', $request['procedure_id'])
                ->where('type', 'Damaged')
                ->get();
            if (empty($damaged_data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Damaged data retrieved successfully', 'code' => 200, 'damaged_data' => $damaged_data]);

        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function returnedData(Request $request){
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request['procedure']) && !empty($request['procedure'])) {
                $procedure = Procedure::where('procedure_name', $request['procedure'])->first();
                $request['procedure_id'] = $procedure->id;
            } else {
                $request['procedure_id'] = null;
            }
            $returned_data = ProcedureItemType::with('item')
                ->where('patient_id', $request->patient_id)
                ->where('procedure_id', $request['procedure_id'])
                ->where('type', 'Returned')
                ->get();
            if (empty($returned_data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Returned data retrieved successfully', 'code' => 200, 'damaged_data' => $returned_data]);

        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function wastedData(Request $request){
        try {
            $token = $request->token;
            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if (isset($request['procedure']) && !empty($request['procedure'])) {
                $procedure = Procedure::where('procedure_name', $request['procedure'])->first();
                $request['procedure_id'] = $procedure->id;
            } else {
                $request['procedure_id'] = null;
            }
            $wasted_data = ProcedureItemType::with('item')
                ->where('patient_id', $request->patient_id)
                ->where('procedure_id', $request['procedure_id'])
                ->where('type', 'Wasted')
                ->get();
            if (empty($wasted_data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            }
            return response()->json(['status' => 'Success', 'message' => 'Wasted data retrieved successfully', 'code' => 200, 'damaged_data' => $wasted_data]);

        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function backToCabinetList(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = ProcedureItemType::with(['item'])->select([
                    'mrn_no',
                    'item_id',
                    'accession_no',
                    DB::raw('GROUP_CONCAT(DISTINCT procedure_id) as procedure_id')
                ])
                    ->where('type', 'Returned')
                    ->groupBy('mrn_no', 'item_id', 'accession_no')
                    ->get();
            $procedure_details = $data->map(function ($procedure) {
                $procedure_id = explode(',', $procedure->procedure_id);
                $procedures = Procedure::whereIn('id', $procedure_id)->get();
                $procedure->setAttribute('procedures', $procedures);
                return $procedure;
            });

            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Returned Item retrieved successfully', 'code' => 200, 'total_count' => count($data), 'back_to_cabinet_list' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
        }
    }

    public function dailyConsumed(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = ProcedureItemType::select('mrn_no', 'accession_no', DB::raw('GROUP_CONCAT(DISTINCT item_id) as item_id'), DB::raw('GROUP_CONCAT(DISTINCT procedure_id) as procedure_id'))
                ->groupBy('mrn_no', 'accession_no')
                ->get();

            $item_details = $data->map(function ($item) {
                $item_id = explode(',', $item->item_id);
                $items = Item::whereIn('id', $item_id)->get();
                $item->setAttribute('items', $items);
                return $item;
            });

            $procedure_details = $data->map(function ($procedure) {
                $procedure_id = explode(',', $procedure->procedure_id);
                $procedures = Procedure::whereIn('id', $procedure_id)->get();
                $procedure->setAttribute('procedures', $procedures);
                return $procedure;
            });

            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Daily Consumed Items retrieved successfully', 'code' => 200, 'total_count' => count($data), 'daily_consumed_list' => $data]);
            }


        } catch (\Exception $e) {
            Log::debug($e->getMessage());
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
        }
    }

    public function itemUniqueList(Request $request)
    {
        {
            try {
                $token = $request->token;

                if (!$this->user_authentication($token)) {
                    return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
                }
                $items = Item::whereNot('item_entry_status', 'clone')->get();
                return response()->json(['status' => 'Success', 'message' => 'Items retrieved successfully', 'code'=>200, 'total_count' => count($items), 'data' => $items], 200);
            } catch (\Exception $e) {
                log::debug($e->getMessage());
                return response()->json(['status' => 'error', 'code' => 500, 'message' => 'Please contact the administrator'], 500);
            }
        }
    }
}

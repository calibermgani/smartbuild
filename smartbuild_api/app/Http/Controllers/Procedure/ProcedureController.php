<?php

namespace App\Http\Controllers\Procedure;

use App\Http\Controllers\Controller;
use App\Models\Item\ItemHistory;
use App\Models\Procedure\PatientsInformation;
use App\Models\Procedure\ProcedureItemType;
use Illuminate\Http\Request;
use App\Models\Procedure\Procedure;
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
                return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
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
            return response()->json(['status' => 'error', 'code' => 500, 'message' => $e->getMessage()], 500);
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
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
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
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
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
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
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
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }

    public function procedureList(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }

            $data = PatientsInformation::get();
            $patientName = $data->map(function ($patient) {
                $name = $patient->first_name . ' ' . $patient->middle_name;
                $patient->setAttribute('patient_name', $name);
                return $patient;
            });
            if (empty($data)) {
                return response()->json(['status' => 'error', 'code' => 204, 'message' => 'No item found'], 204);
            } else {
                return response()->json(['status' => 'Success', 'message' => 'Procedure List data retrieved successfully', 'code' => 200, 'total_count' => count($data), 'patient_list' => $data]);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }

    public function procedureDetails(Request $request){
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
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }

    public function procedureImport(Request $request){
        try {
            $token = $request->token;

            if (!$this->user_authentication($token)) {
                return response()->json(['status' => 'error', 'code' => 401, 'message' => 'Unauthorized'], 401);
            }
            if ($request->attachment != '') {
                // $attachmentName = $request->attachment->getClientOriginalName();
                // $extension6 = $request->attachment->getClientOriginalExtension();
                // $onlyFileName = pathinfo($attachmentName, PATHINFO_FILENAME);
                // $onlyFileName = str_replace(' ', '_', $onlyFileName);
                // $fileNames = $onlyFileName . '_' . date('YmdHis') . '.' . $extension6;

                // if (!Storage::exists('public/importFiles/')) {
                //     $storage_path = Storage::makeDirectory('importFiles/', 0775, true);
                //     $path = $request->attachment->storeAs('public/importFiles/', $fileNames);
                // } else {
                //     $path = $request->attachment->storeAs('public/importFiles/', $fileNames);
                // }

                // $import_data = new ImportNewClaims($modify_filename, $report_date, $notes, $user, $fileNameToStore, $practice_dbid);
            }

            return response()->json(['status' => 'Success', 'message' => 'Patient data retrieved successfully', 'code' => 200, 'total_count' => count($data), 'patient' => $data]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }
}

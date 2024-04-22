<?php

namespace App\Http\Controllers\Procedure;

use App\Http\Controllers\Controller;
use App\Models\Procedure\ProcedureItemType;
use Illuminate\Http\Request;
use App\Models\Procedure\Procedure;

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
                return response()->json(['status' => 'Success', 'message' => 'Damaged Item retrieved successfully', 'code' => 200, 'total_count' => count($data), 'procedures' => $data]);
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
                return response()->json(['status' => 'Success', 'message' => 'Damaged Item retrieved successfully', 'code' => 200, 'total_count' => count($data), 'procedures' => $data]);
            }


        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'code' => 404, 'message' => $e->getMessage()], 404);
        }
    }
}

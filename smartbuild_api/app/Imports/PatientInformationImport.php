<?php

namespace App\Imports;

use App\Models\Procedure\PatientsInformation;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class PatientInformationImport implements ToModel, WithStartRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */

    public function startRow(): int
    {
        return 2; // Start reading from row 2 (assuming row 1 is the header)
    }
    public function model(array $row)
    {
        if(isset($row[2]) && !empty($row[3])){
            $data['title'] = !empty($row[0]) ? $row[0] : null;
            $data['martital_status'] = !empty($row[1]) ? $row[1] : null;
            $data['first_name'] = !empty($row[2]) ? $row[2] : null;
            $data['middle_name'] = !empty($row[3]) ? $row[3] : null;
            $data['surname'] = !empty($row[4]) ? $row[4] : null;
            $data['location'] = !empty($row[5]) ? $row[5] : null;
            $data['age'] = !empty($row[6]) ? $row[6] : null;
            $data['dob'] = !empty($row[7]) ? date('Y-m-d',strtotime($row[7])) : null;
            $data['name_of_partner'] = !empty($row[8]) ? $row[8] : null;
            $data['name_of_children'] = !empty($row[9]) ? $row[9] : null;
            $data['referred_by'] = !empty($row[10]) ? $row[10] : null;
            $data['occupation'] = !empty($row[11]) ? $row[11] : null;
            $data['gender'] = !empty($row[12]) ? $row[12] : null;
            $data['telephone'] = !empty($row[13]) ? $row[13] : null;
            $data['primary_email'] = !empty($row[14]) ? $row[14] : null;
            $data['address_type'] = !empty($row[15]) ? $row[15] : null;
            $data['flat_unit_no'] = !empty($row[16]) ? $row[16] : null;
            $data['street_no'] = !empty($row[17]) ? $row[17] : null;
            $data['street_name'] = !empty($row[18]) ? $row[18] : null;
            $data['suburb'] = !empty($row[19]) ? $row[19] : null;
            $data['town_city'] = !empty($row[20]) ? $row[20] : null;
            $data['state'] = !empty($row[21]) ? $row[21] : null;
            $data['post_code'] = !empty($row[22]) ? $row[22] : null;
            $data['mrn_no'] = !empty($row[23]) ? $row[23] : null;
            $data['provider_no'] = !empty($row[24]) ? $row[24] : null;
            $data['patient_type'] = !empty($row[25]) ? $row[25] : null;
            $data['admission_type'] = !empty($row[26]) ? $row[26] : null;
            $data['exam_status'] = !empty($row[27]) ? $row[27] : null;
            $data['study_id'] = !empty($row[28]) ? $row[28] : null;
            $data['priority'] = !empty($row[29]) ? $row[29] : null;
            $data['procedure_status'] = !empty($row[30]) ? $row[30] : null;
            $data['study_date_time'] = !empty($row[31]) ? date('Y-m-d H:i:s',strtotime($row[31])) : null;
            $data['accession_no'] = !empty($row[32]) ? $row[32] : null;
            $data['requesting_physician'] = !empty($row[33]) ? $row[33] : null;
            $data['specialty'] = !empty($row[34]) ? $row[34] : null;
            $data['language'] = !empty($row[35]) ? $row[35] : null;
            $data['blood_group'] = !empty($row[36]) ? $row[36] : null;
            $data['weight'] = !empty($row[37]) ? $row[37] : null;
            $data['height'] = !empty($row[38]) ? $row[38] : null;
            $data['procedure'] = !empty($row[39]) ? $row[39] : null;
            $data['created_by'] = "1";
            PatientsInformation::create($data);
        }
    }
}

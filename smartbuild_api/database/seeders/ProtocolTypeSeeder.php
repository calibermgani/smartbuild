<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProtocolTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (DB::table('protocol_types')->count() == 0) {
            DB::table('protocol_types')->insert([

                [
                    'name' => 'protocol 1',
                    'description' => 'protocol 1 description',
                    'created_by' => '1',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name' => 'protocol 2',
                    'description' => 'protocol 2 description',
                    'created_by' => '1',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name' => 'protocol 3',
                    'description' => 'protocol 3 description',
                    'created_by' => '1',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name' => 'protocol 4',
                    'description' => 'protocol 4 description',
                    'created_by' => '1',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
            ]);
        } else {
            echo "\e[Table is not empty, Already Datas Are Existing ";
        }
    }
}

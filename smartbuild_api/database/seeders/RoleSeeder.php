<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (DB::table('roles')->count() == 0) {
            DB::table('roles')->insert([
                [
                    'role_name' => 'admin',
                    'status' => 'Active',
                    'created_by' => '1',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'role_name' => 'user',
                    'status' => 'Active',
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

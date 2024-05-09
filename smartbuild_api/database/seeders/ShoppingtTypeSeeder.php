<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShoppingtTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (DB::table('shopping_types')->count() == 0) {
            DB::table('shopping_types')->insert([
                [
                    'name' => 'Requesting',
                    'description' => 'Requesting shopping type',
                    'created_by' => 1,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name' => 'Schedulling',
                    'description' => 'Schedulling shopping type',
                    'created_by' => 1,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name' => 'Pre-procedure',
                    'description' => 'Pre-procedure shopping type',
                    'created_by' => 1,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name' => 'Intra-procedure',
                    'description' => 'Intra-procedure shopping type',
                    'created_by' => 1,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name' => 'Post-procedure',
                    'description' => 'Post-procedure shopping type',
                    'created_by' => 1,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ]
            ]);
        } else {
            echo "\e[Table is not empty, Already Datas Are Existing ";
        }
    }
}

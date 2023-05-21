<?php

use App\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            [
                'title' => "hogehoge",
                'description' => "test1",
                'uid' => 1,
            ],
        ]);
    }
}

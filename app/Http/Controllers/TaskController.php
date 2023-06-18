<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    //画面にTodolistを表示する
    public function get()
    {
        $user = Auth::user();
        Log::info($user);
        Log::info("🦆🦆🦆");
        $tasks = DB::table('tasks')->get();
        return $tasks;
    }


    //userが入力したformの内容をtaskに入力する
    public function save(Request $request)
    {
        $task = new Task;
        Log::info($task);
        $task->description = $request->task;
        //後で変更する
        $task->title = "こんにちは";
        //userごとに後で変更する
        $task->uid = "3";
        $task->save();
        return response()->json($task, 200);
    }


    //todo listを消す
    public function delete(Request $request)
    {
        $id = $request->id;
        $task = new Task;
        $task->destroy($id);
    }
}

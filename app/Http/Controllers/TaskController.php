<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    //画面にTodolistを表示する
    public function index()
    {
        return view('home');
    }


    public function save(Request $request)
    {
        Log::info($request);
        Log::info("👹👹👹👹👹👹👹👹👹👹");
        $task = new Task;
        Log::info($task);
        $task->description = $request->task;
        $task->title = "こんにちは";
        $task->uid = "3";
        $task->save();
        return response()->json($task, 200);
    }


    public function delete_todo()
    {
        return view('home');
    }
}

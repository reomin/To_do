<?php

use App\Http\Controllers\TaskController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('tasks', 'TaskController');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => 'api'], function () {
    Route::post('task', "TaskController@save");
});

Route::group(['middleware' => 'api'], function () {
    Route::get('task/get', "TaskController@get");
});

Route::group(['middleware' => 'api'], function () {
    Route::delete('task/delete/{id}', "TaskController@delete");
});

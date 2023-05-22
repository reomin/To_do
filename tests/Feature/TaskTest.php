<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Task;

class TaskTest extends TestCase
{

    public function  test()
    {
        $data = [
            "title" => "こんにちは",
        ];
        $response = $this->postJson('api/tasks', $data);
        $response->asset(201);
    }
}

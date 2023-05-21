<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        'title' => $this->faker->realText(rand(15.40)),
        'description' => $this->faker->realText(rand(15.40)),
        'uid' => 1,
    ];
});

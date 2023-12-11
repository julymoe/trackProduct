<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categoryChoices = [
            'Battery Car',
            'Battery Cycle',
            'Baby Walker with roof',
            'Child Bike',
            'Bed',
            'Chair',
            'Mat',
            'Stand',
            'Table'
        ];

        $category = [];
        for ($i = 1; $i <= rand(1, 4); $i++) {
            $category[] = Arr::random($categoryChoices);
        }

        $category = array_unique($category);

        return [
            'id' => rand(11111, 99999),
            'user_id' => rand(1, 10),
            'name' => Arr::random(['Battery', 'Bicycle', 'Baby Walker', 'Furniture']),
            'category' => $category,
            'status' => Arr::random(['Ordered', 'Preparing', 'Packaging', 'Delivering', 'Ready']),
        ];
    }
}

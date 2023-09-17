<?php

namespace Tests\Feature\Http\Controllers;

use Tests\TestCase;

class QRCodeGeneratorControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->post('/api/qrcode', [
            'text' => fake()->url(),
        ]);

        $response->assertStatus(200);

        $response->assertJson(['file' => 'string']);
    }
}

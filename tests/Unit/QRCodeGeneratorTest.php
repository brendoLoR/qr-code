<?php

namespace App\Services;

use PHPUnit\Framework\TestCase;

class QRCodeGeneratorTest extends TestCase
{

    public function testFromText()
    {
        $generated = QRCodeGenerator::fromText('teste', 'storage/app/public');
        $filename = 'storage/app/public/teste.png';
        self::assertEquals($filename, $generated);

        self::assertFileExists($filename);
    }
}

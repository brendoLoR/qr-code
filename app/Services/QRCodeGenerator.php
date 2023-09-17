<?php

namespace App\Services;

use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

class QRCodeGenerator
{
    /**
     * @param string $text
     * @return string
     */
    public static function fromText(string $text,
                                    string $dir,
                                    int $version = 5,
                                    int $scale = 5,
    ): string
    {
        $fileName = str($text)
            ->substr(0, 20)
            ->append(uniqid())
            ->slug()
            ->append('.png');

        $path = "$dir/$fileName";

        $options = new QROptions([
            'version' => $version,
            'scale' => $scale,
            'eccLevel' => QRCode::ECC_L,
            'outputType' => QRCode::OUTPUT_IMAGE_PNG,
            'imageTransparent' => false,
            'imageBase64' => false
        ]);

        file_put_contents($path, (new QRCode($options))->render($text));

        return $fileName;

    }
}

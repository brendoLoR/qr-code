<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class QRCodeFormController extends Controller
{
    public function __invoke(): Factory|View|Application
    {
        return view('index');
    }
}

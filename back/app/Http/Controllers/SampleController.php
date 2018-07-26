<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

use Illuminate\Http\Request;
use App\Http\Requests;

class SampleController extends Controller
{
    function __construct()
    {
        
    }

    function try(Request $request)
    {
        dd($request->age);
        return response()->json("SAD", 200);
    }
    function register_submit(Request $request)
    {
        dd($request->all());
    }
}

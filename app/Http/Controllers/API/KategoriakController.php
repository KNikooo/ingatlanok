<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\kategoriak;

class KategoriakController extends Controller
{
    public function index(){
        return response()->json(kategoriak::all());
    }
}

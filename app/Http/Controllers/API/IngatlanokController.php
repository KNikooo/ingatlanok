<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ingatlanok;

class IngatlanokController extends Controller
{
    public function index(){
        $ingatlanok = response()->json(ingatlanok::with('kategoriak')->get());
        return $ingatlanok;
    }

    public function store(Request $request)
    {
        $ingatlanok = new ingatlanok();
        $ingatlanok->kategoria = $request->kategoria;
        $ingatlanok->leiras = $request->leiras;
        $ingatlanok->hirdetesDatuma  = $request->hirdetesDatuma;
        $ingatlanok->tehermentes  = $request->tehermentes;
        $ingatlanok->kepURL  = $request->kepURL;
        $ingatlanok->save();
    }

    public function update(Request $request, $id)
    {
        $ingatlanok = ingatlanok::findOrFail($id);
        
        $ingatlanok->kategoria = $request->get('kategoria');
        $ingatlanok->leiras = $request->get('leiras');
        $ingatlanok->hirdetesDatuma  = $request->get('hirdetesDatuma');
        $ingatlanok->tehermentes  = $request->get('tehermentes');
        $ingatlanok->kepURL  = $request->get('kepURL');
        $ingatlanok->save();
        return response()->json($ingatlanok);
    }

    public function destroy($id)
    {
        $ingatlanok = ingatlanok::findOrFail($id);
        $ingatlanok->delete();
    } 
}

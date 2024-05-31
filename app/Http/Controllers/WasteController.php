<?php

namespace App\Http\Controllers;

use App\Models\Waste;
use App\Models\WasteCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WasteController extends Controller
{
    public function index()
    {
        $wastes = Waste::with('wasteCategory')->get();
        return Inertia::render('Wastes/Index', ['wastes' => $wastes]);
    }

    public function create()
    {
        $categories = WasteCategory::all();
        return Inertia::render('Wastes/Create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'pic_waste' => 'required|string',
            'merk_product' => 'required|string',
            'weight_waste' => 'required|integer',
            'id_wc' => 'required|exists:waste_categories,id',
        ]);

        Waste::create($request->all());

        return redirect()->route('wastes.index');
    }

    public function show(Waste $waste)
    {
        return Inertia::render('Wastes/Show', ['waste' => $waste->load('wasteCategory')]);
    }

    public function edit(Waste $waste)
    {
        $categories = WasteCategory::all();
        return Inertia::render('Wastes/Edit', ['waste' => $waste, 'categories' => $categories]);
    }

    public function update(Request $request, Waste $waste)
    {
        $request->validate([
            'pic_waste' => 'required|string',
            'merk_product' => 'required|string',
            'weight_waste' => 'required|integer',
            'id_wc' => 'required|exists:waste_categories,id',
        ]);

        $waste->update($request->all());

        return redirect()->route('wastes.index');
    }

    public function destroy(Waste $waste)
    {
        $waste->delete();

        return redirect()->route('wastes.index');
    }
}

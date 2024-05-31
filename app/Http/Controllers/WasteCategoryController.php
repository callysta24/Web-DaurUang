<?php

namespace App\Http\Controllers;

use App\Models\Waste;
use App\Models\WasteCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WasteCategoryController extends Controller
{
    public function index()
    {
        // Mengambil semua waste dengan kategori terkait
        $wastes = Waste::with('wasteCategory')->get();

        // Mengirim data waste ke tampilan
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
            'category_name' => 'required|string',
            'poin_per_kg' => 'required|string',
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
            'category_name' => 'required|string',
            'poin_per_kg' => 'required|string',
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

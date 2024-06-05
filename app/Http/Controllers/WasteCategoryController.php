<?php

namespace App\Http\Controllers;

use App\Models\WasteCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WasteCategoryController extends Controller
{
    // Metode index untuk menampilkan daftar kategori di halaman web
    public function index()
    {
        $wasteCategories = WasteCategory::all();
        return Inertia::render('AdminDashboard/CRUD/WasteCategories/Index', ['wasteCategories' => $wasteCategories]);
    }

    public function create()
    {
        return Inertia::render('AdminDashboard/CRUD/WasteCategories/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_name' => 'required|string',
            'poin_per_kg' => 'required|integer',
        ]);

        WasteCategory::create($request->all());

        return redirect()->route('waste-categories.index');
    }

    public function show(WasteCategory $wasteCategory)
    {
        return Inertia::render('AdminDashboard/CRUD/WasteCategories/Show', ['wasteCategories' => $wasteCategory]);
    }

    public function edit(WasteCategory $wasteCategory)
    {
        return Inertia::render('AdminDashboard/CRUD/WasteCategories/Edit', ['wasteCategories' => $wasteCategory]);
    }

    public function update(Request $request, WasteCategory $wasteCategory)
    {
        $request->validate([
            'category_name' => 'required|string',
            'poin_per_kg' => 'required|integer',
        ]);

        $wasteCategory->update($request->all());

        return redirect()->route('waste-categories.index');
    }

    public function destroy(WasteCategory $wasteCategory)
    {
        $wasteCategory->delete();

        return redirect()->route('waste-categories.index');
    }

    // JALAN API UNTUK TEST POSTMAN
    // Metode apiIndex untuk mengembalikan data kategori dalam format JSON
    public function apiIndex()
    {
        return response()->json(WasteCategory::all());
    }
}

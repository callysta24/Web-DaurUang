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

        // Mengambil data Waste beserta relasi WasteCategory
        $wastes = Waste::with('wasteCategory')->get();
        $categories = WasteCategory::all(); // Ambil daftar kategori limbah

        return Inertia::render('AdminDashboard/CRUD/Wastes/Index', ['wastes' => $wastes, 'categories' => $categories]);
    }
    public function create()
    {
        // Tampilkan formulir untuk membuat produk baru
        $categories = WasteCategory::all();
        return Inertia::render('AdminDashboard/CRUD/Wastes/Create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        // Simpan produk baru ke database
        $request->validate([
            'pic_waste' => 'required|string',
            'merk_product' => 'required|string',
            'weight_waste' => 'required|integer',
            'id_wc' => 'required|exists:waste_categories,id_wc',
        ]);

        Waste::create($request->all());

        return redirect()->route('wastes.index');
    }

    public function show(Waste $waste)
    {
        // Tampilkan produk tertentu
        return Inertia::render('AdminDashboard/CRUD/Wastes/Show', ['waste' => $waste->load('wasteCategory')]);
    }

    public function edit(Waste $waste)
    {
        // Tampilkan formulir untuk mengedit produk tertentu
        $categories = WasteCategory::all();
        return Inertia::render('AdminDashboard/CRUD/Wastes/Edit', ['waste' => $waste, 'categories' => $categories]);
    }

    public function update(Request $request, Waste $waste)
    {
        // Perbarui produk tertentu di database
        $request->validate([
            'pic_waste' => 'required|string',
            'merk_product' => 'required|string',
            'weight_waste' => 'required|integer',
            'id_wc' => 'required|exists:waste_categories,id_wc',
        ]);

        $waste->update($request->all());

        return redirect()->route('wastes.index');
    }

    public function destroy(Waste $waste)
    {
        // Hapus produk tertentu dari database
        $waste->delete();

        return redirect()->route('wastes.index');
    }

    // JALAN API UNTUK TEST POSTMAN
    public function apiIndex()
    {
        $wastes = Waste::with('wasteCategory')->get(); // Mengambil semua data limbah dengan kategori yang terkait
        return response()->json($wastes);
    }
}

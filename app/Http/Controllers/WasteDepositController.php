<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Waste;
use App\Models\WasteDeposit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WasteDepositController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil data Waste beserta relasi WasteCategory
        $wastedeposits = WasteDeposit::with('WasteDeposit')->get();
        $wastes = Waste::all();
        $customers = Waste::all();

        return Inertia::render('AdminDashboard/CRUD/Wastes/Index', ['wastedeposits' => $wastedeposits, 'wastes' => $wastes, 'customers' => $customers,]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $wastes = Waste::all();
        $customers = Customer::all();

        return Inertia::render('AdminDashboard/CRUD/WasteDeposits/Create', [
            'wastes' => $wastes,
            'customers' => $customers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'date_deposit' => 'required|date',
            'poin_of_deposit' => 'required|integer',
            'id_customer' => 'required|exists:customers,id',
            'id_waste' => 'required|exists:wastes,id_waste',
        ]);

        WasteDeposit::create($request->all());

        return redirect()->route('wastedeposits.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(WasteDeposit $wastedeposit)
    {
        return Inertia::render('AdminDashboard/CRUD/WasteDeposits/Show', [
            'wastedeposit' => $wastedeposit->load('waste', 'customer')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(WasteDeposit $wastedeposit)
    {
        $wastes = Waste::all();
        $customers = Customer::all();

        return Inertia::render('AdminDashboard/CRUD/WasteDeposits/Edit', [
            'wastedeposit' => $wastedeposit,
            'wastes' => $wastes,
            'customers' => $customers,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, WasteDeposit $wastedeposit)
    {
        $request->validate([
            'date_deposit' => 'required|date',
            'poin_of_deposit' => 'required|integer',
            'id_customer' => 'required|exists:customers,id',
            'id_waste' => 'required|exists:wastes,id_waste',
        ]);

        $wastedeposit->update($request->all());

        return redirect()->route('wastedeposits.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(WasteDeposit $wastedeposit)
    {
        $wastedeposit->delete();

        return redirect()->route('wastedeposits.index');
    }

    // JALAN API UNTUK TEST POSTMAN
    public function apiIndex()
    {
        $wastedeposit = WasteDeposit::with('waste', 'customer')->get(); // Mengambil semua data limbah dengan kategori yang terkait
        return response()->json($wastedeposit);
    }
}

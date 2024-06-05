<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// import
use App\Http\Controllers\WasteCategoryController;
use App\Http\Controllers\WasteController;
use App\Http\Controllers\WasteDepositController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route WC
// Rute untuk mengambil daftar kategori waste (API)
// Route untuk index method
Route::get('waste-categories', [WasteCategoryController::class, 'index']);

Route::get('waste-categories/api', [WasteCategoryController::class, 'apiIndex']);
// Route::post('waste-category', [WasteCategoryController::class, 'store']);

// Route WASTE
// Route untuk index method
Route::get('waste', [WasteController::class, 'index']);

// Route untuk apiIndex method
Route::get('waste/api', [WasteController::class, 'apiIndex']);


// Route WASTEDEPOSIT
// Route untuk index method
Route::get('waste-deposit', [WasteDepositController::class, 'index']);

// Route untuk apiIndex method
Route::get('waste-deposit/api', [WasteDepositController::class, 'apiIndex']);

// Route CUSTOMER
// Route untuk index method
Route::get('customer', [CustomerController::class, 'index']);

// Route untuk apiIndex method
Route::get('customer/api', [CustomerController::class, 'apiIndex']);

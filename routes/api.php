<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// import
use App\Http\Controllers\WasteCategoryController;
use App\Http\Controllers\WasteController;

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
Route::get('waste-category', [WasteCategoryController::class, 'index']);
Route::post('waste-category', [WasteCategoryController::class, 'store']);

// Route WASTE
Route::get('waste', [WasteController::class, 'index']);

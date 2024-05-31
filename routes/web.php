<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
// use App\Http\Controllers\UserController as ControllersUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\WasteController;
use App\Http\Controllers\WasteCategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::methodGet('/url', [memanggilFileController::class, 'function method yang dieksekusi'])->name('untuk redirect page')

// route contoh untuk use page id db
// Route::get('/users', [UserController::class, 'index'])->name('user.index');

// route admin dashboard
Route::get('/admindashboard', function () {
    return Inertia::render('AdminDashboard/Dashboard');
})->name('AdminDashboard');

// route blog
Route::get('/blog', function () {
    return Inertia::render('Blog/Dashboard');
})->name('Blog');

// route admin list kaca
Route::get('/kaca', function () {
    return Inertia::render('AdminDashboard/ListKaca');
})->name('ListKaca');


// route
Route::resource('wastes', WasteController::class);
Route::resource('waste-categories', WasteCategoryController::class);

require __DIR__ . '/auth.php';

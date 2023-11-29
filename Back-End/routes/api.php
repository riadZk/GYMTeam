<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ControllerClasse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ControllerContact;

Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);

Route::resource('contact', ControllerContact::class);
Route::resource('classe', ControllerClasse::class);


Route::middleware('auth:sanctum')->group(function () {

    Route::post('logout',[AuthController::class,'logout']);
    Route::get('profile',[AuthController::class,'profile']);

});

<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\pages\HomePageController;
use App\Http\Controllers\{
    ArtController,
    CollectionController,
    ForumController,
    AuthController,
    AffiliateController
};

Route::group(['prefix' => '', 'as' => 'pages.'], function () {
    Route::resource('/', HomePageController::class)->only(['index']);

    Route::resource('/arts', ArtController::class)->only(['update', 'index']);
    Route::resource('/forums', ForumController::class)->only(['update']);
    Route::resource('/collections', CollectionController::class)->only(['update']);
    Route::resource('/affiliates', AffiliateController::class)->only(['update']);

    Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout.submit');
    Route::get('/art-previews', [AuthController::class, 'artPreviews'])->name('art_previews');
    Route::get('/friends', [AuthController::class, 'getFriends'])->name('friends');
});

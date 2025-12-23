<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\pages\HomePageController;
use App\Http\Controllers\{
    ArtController,
    CollectionController,
    RecentForumController,
    AuthController,
    AffiliateController
};

Route::group(['prefix' => '', 'as' => 'pages.'], function () {
    Route::resource('/', HomePageController::class)->only(['index']);

    Route::resource('/art', ArtController::class)->only(['store']);
    Route::resource('/recent-forum', RecentForumController::class)->only(['store']);
    Route::resource('/collection', CollectionController::class)->only(['store']);
    Route::resource('/affiliate', AffiliateController::class)->only(['store']);

    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.submit');

    Route::get('/art-previews', [AuthController::class, 'artPreviews'])->name('art_previews');
});

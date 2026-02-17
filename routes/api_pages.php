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

    Route::resource('/art', ArtController::class)->only(['update']);
    Route::resource('/recent-forum', RecentForumController::class)->only(['store']);
    Route::resource('/collection', CollectionController::class)->only(['store']);
    Route::resource('/affiliate', AffiliateController::class)->only(['store']);

    Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout.submit');
    Route::get('/art-previews', [AuthController::class, 'artPreviews'])->name('art_previews');
    Route::get('/friends', [AuthController::class, 'getFriends'])->name('friends');
});

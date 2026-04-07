<template>
    <div v-if="!full_view" class="bg-brand-950 mx-4 rounded-3xl p-4 flex flex-col gap-2">
        <!-- SECTION: USER -->
        <div class="flex gap-2 justify-between items-center">
            <img
                src="https://images.unsplash.com/photo-1774871111668-e3a76bb786ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                class="size-9 rounded-full cursor-pointer"
            />

            <div class="flex flex-col gap-0 grow">
                <div class="text-sm cursor-pointer">{{ collection.user?.username }}</div>
                <div class="text-xs text-gray-400">{{ messengerStyleTime(collection.created_at) }}</div>
            </div>

            <div class="flex flex-col gap-0">
                <Icon icon="pixelarticons:eye" class="cursor-pointer" />
            </div>
        </div>

        <!-- SECTION: TITLE -->
        <h1 class="font-semibold cursor-pointer line-clamp-2">{{ collection.title }}</h1>

        <!-- SECTION: DESCRIPTION -->
        <p class="line-clamp-2 cursor-pointer line-through">
            This is a general catch-all collection for any tilesets and background images for side-scrolling/fighting/run 'n gun type games. Please post a link
            in the comments if you see anything I've missed or should add, or if you want to be a collaborator.
        </p>

        <!-- SECTION: CONTENTS -->
        <div class="flex items-center -space-x-2 cursor-pointer">
            <img
                src="https://images.unsplash.com/photo-1774268184985-f1af67b38179?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
                class="size-12 rounded-xl border-2 border-brand-900"
                v-for="item in [0, 1, 2, 3, 4]"
                :key="item"
            />

            <div class="size-12 bg-brand-900 rounded-xl flex items-center justify-center">+{{ formatNumber(collection.art_collected - 5) }}</div>
        </div>

        <!-- SECTION: STATS -->
        <div class="flex items-center gap-2 justify-end">
            <button class="flex items-center gap-2 bg-brand-900 px-2.5 py-1 rounded-full cursor-pointer">
                {{ formatNumber(collection.art_collected) }} <Icon icon="pixelarticons:image" />
            </button>
            <button class="flex items-center gap-2 bg-brand-900 px-2.5 py-1 rounded-full cursor-pointer">344 <Icon icon="pixelarticons:chat" /></button>
            <button class="flex items-center gap-2 bg-affair-700 px-2.5 py-1 rounded-full cursor-pointer">
                {{ formatNumber(collection.favorites_count) }} <Icon icon="pixelarticons:heart" />
            </button>
        </div>
    </div>

    <div v-else class="bg-brand-950 mx-4 rounded-3xl p-4 flex flex-col gap-2">
        <div class="flex flex-col gap-1">
            <!-- SECTION: TITLE -->
            <h1 class="font-semibold cursor-pointer line-clamp-2">{{ collection.title }}</h1>

            <!-- SECTION: USER -->
            <div class="flex gap-2 items-center">
                <img
                    src="https://images.unsplash.com/photo-1774871111668-e3a76bb786ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                    class="size-5 rounded-full cursor-pointer"
                />

                <div class="flex gap-2 items-center">
                    <div class="text-sm cursor-pointer">{{ collection.user?.username }}</div>
                    <div class="text-xs text-gray-400">-</div>
                    <div class="text-xs text-gray-400">{{ messengerStyleTime(collection.created_at) }}</div>
                </div>
            </div>
        </div>

        <!-- SECTION: STATS -->
        <div class="flex items-center justify-between">
            <Icon icon="pixelarticons:eye" class="cursor-pointer" />

            <div class="flex items-center gap-2">
                <button class="flex items-center gap-2 bg-brand-900 px-2.5 py-1 rounded-full cursor-pointer">
                    {{ formatNumber(collection.art_collected) }} <Icon icon="pixelarticons:image" />
                </button>
                <button class="flex items-center gap-2 bg-brand-900 px-2.5 py-1 rounded-full cursor-pointer">344 <Icon icon="pixelarticons:chat" /></button>
                <button class="flex items-center gap-2 bg-affair-700 px-2.5 py-1 rounded-full cursor-pointer">
                    {{ formatNumber(collection.favorites_count) }} <Icon icon="pixelarticons:heart" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { Collection } from '@/global.interfaces'
import { messengerStyleTime, formatNumber } from '@/utils/utils'

defineProps<{
    full_view: boolean
    collection: Collection
}>()
</script>

<style scoped></style>

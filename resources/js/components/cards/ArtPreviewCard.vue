<template>
    <div class="flex flex-col gap-2 sm:rounded-3xl h-80 2xl:h-130 relative overflow-hidden justify-between group">
        <div v-if="config.loading || !show_data" class="absolute inset-0 animate-pulse bg-dark-002" />
        <div
            v-else
            class="absolute inset-0"
            :style="{
                backgroundImage: `url('https://images.unsplash.com/photo-1772289239052-7bbbd9bda160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5
            }"
        />

        <div class="absolute opacity-0 w-full h-full group-hover:opacity-100 transition-all">
            <div class="absolute left-0 bg-linear-to-l from-black/0 via-black/0 to-black/60 w-32 h-full flex items-center cursor-pointer">
                <Icon icon="pixelarticons:arrow-left" class="size-5 text-brand-100 mx-4" />
            </div>
            <div class="absolute right-0 bg-linear-to-r from-black/0 via-black/0 to-black/60 w-32 h-full flex items-center justify-end cursor-pointer">
                <Icon icon="pixelarticons:arrow-right" class="size-5 text-brand-100 mx-4" />
            </div>
        </div>

        <!-- <div class="absolute left-0 bottom-0 inset-x-0 bg-linear-to-l to-black/0 from-black/80">
            <div />
        </div> -->

        <div class="z-10 p-4 flex justify-between gap-4">
            <!-- <div class="flex gap-2 flex-1">
                <div class="flex items-center cursor-pointer bg-dark-001/30 hover:bg-brand-950 rounded-3xl px-4 py-2 transition-all" @click="played = !played">
                    <Icon v-if="played" icon="pixelarticons:pause" class="size-5" />
                    <Icon v-else icon="pixelarticons:play" class="size-5" />
                </div>

                <div class="flex items-center flex-1">
                    <input
                        id="range"
                        type="range"
                        class="block w-full py-2 bg-white border border-brand-950 rounded-md focus:border-blue-500 accent-brand-400"
                    />
                </div>
            </div> -->
            <!-- <div class="flex gap-2">
                <div class="flex items-center px-4">
                    <div>4:32</div>
                </div>

                <div class="flex items-center bg-dark-001/30 backdrop-blur-sm rounded-3xl">
                    <div class="flex gap-2 items-center cursor-pointer hover:bg-brand-950 rounded-3xl px-4 py-2 transition-all" @click="hearted = !hearted">
                        <p class="text-md">{{ formatNumber(show_data?.favorites_count ?? 0) }}</p>
                        <Icon v-if="hearted" icon="pixel:heart-solid" class="size-5 text-red-300" />
                        <Icon v-else icon="pixel:heart" class="size-5" />
                    </div>
                    <div
                        class="flex gap-2 items-center cursor-pointer hover:bg-brand-950 rounded-3xl px-4 py-2 transition-all"
                        @click="downloaded = !downloaded"
                    >
                        <p class="text-md">{{ formatNumber(show_data?.files[0]?.download_count ?? 0) }}</p>
                        <Icon v-if="downloaded" icon="pixel:check-circle-solid" class="size-5 text-brand-400" />
                        <Icon v-else icon="pixel:download-solid" class="size-5" />
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { formatNumber } from '@/utils/utils'
import { useLocalStorage } from '@vueuse/core'
import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'

const $artStore = useArtStore()

const hearted = useLocalStorage('hearted', false)
const downloaded = useLocalStorage('downloaded', false)
const played = useLocalStorage('played', false)
const { config, show_data } = storeToRefs($artStore)
</script>

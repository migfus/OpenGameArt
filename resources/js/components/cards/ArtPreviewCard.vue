<template>
    <div class="flex flex-col gap-2 rounded-3xl h-130 relative overflow-hidden justify-between group">
        <div
            class="absolute inset-0"
            :style="{
                backgroundImage: `url('https://images.unsplash.com/photo-1772289239052-7bbbd9bda160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5
            }"
        />

        <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/60" />
        <div class="absolute bottom-0 inset-x-0 bg-linear-to-t to-black/0 from-black/80" />

        <div class="z-10 p-4">
            <h1 class="text-3xl">Title Here supposed to be</h1>
            <h2 class="text-2xl">FileName.mp3</h2>
        </div>

        <div class="z-10 p-4 flex justify-between gap-4">
            <div class="flex gap-2 flex-1">
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
            </div>
            <div class="flex gap-2">
                <div class="flex items-center px-4">
                    <div>4:32</div>
                </div>

                <div class="flex items-center bg-dark-001/30 backdrop-blur-sm rounded-3xl">
                    <div class="flex gap-2 items-center cursor-pointer hover:bg-brand-950 rounded-3xl px-4 py-2 transition-all" @click="hearted = !hearted">
                        <p class="text-md">32.4k</p>
                        <Icon v-if="hearted" icon="pixel:heart-solid" class="size-5 text-red-300" />
                        <Icon v-else icon="pixel:heart" class="size-5" />
                    </div>
                    <div
                        class="flex gap-2 items-center cursor-pointer hover:bg-brand-950 rounded-3xl px-4 py-2 transition-all"
                        @click="downloaded = !downloaded"
                    >
                        <p class="text-md">32.4k</p>
                        <Icon v-if="downloaded" icon="pixel:check-circle-solid" class="size-5 text-brand-400" />
                        <Icon v-else icon="pixel:download-solid" class="size-5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocalStorage } from '@vueuse/core'

const hearted = useLocalStorage('hearted', false)
const downloaded = useLocalStorage('downloaded', false)
const played = useLocalStorage('played', false)
</script>

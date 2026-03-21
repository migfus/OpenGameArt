<template>
    <div class="flex flex-col gap-2 rounded-3xl h-100 relative overflow-hidden justify-between">
        <div
            class="absolute inset-0"
            :style="{
                backgroundImage: `url('https://images.unsplash.com/photo-1772289239052-7bbbd9bda160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5
            }"
        />
        <div class="z-10 p-4">
            <h1 class="text-3xl">Title Here supposed to be</h1>
            <h2 class="text-2xl">FileName.mp3</h2>
        </div>

        <div class="z-10 p-4 flex justify-between gap-4">
            <div class="flex gap-2">
                <Icon icon="pixelarticons:play" class="size-6" />
                <div>----------------------------------------------------------------------------</div>
            </div>
            <div class="flex gap-2">
                <div>4:32</div>
                <Icon icon="pixelarticons:prev" class="size-6" />
                <Icon icon="pixelarticons:next" class="size-6" />
                <div class="flex gap-2 items-center">
                    32.4k
                    <Icon icon="pixelarticons:heart" class="size-6" />
                </div>
                <div class="flex gap-2 items-center">
                    32.4k
                    <Icon icon="pixelarticons:arrow-bar-down" class="size-6" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

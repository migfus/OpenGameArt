<template>
    <div :class="['flex flex-col gap-1 group relative isolate cursor-pointer']">
        <div v-if="played" class="p-8 bg-dark-002 rounded-3xl flex items-center justify-center ring-3 ring-brand-900" @click="played = !played">
            <Icon icon="pixelarticons:pause" class="size-12 group-hover:scale-120 transition-all" />
        </div>
        <div v-else class="p-8 bg-brand-950 rounded-3xl flex items-center justify-center" @click="played = !played">
            <Icon icon="pixelarticons:play" class="size-12 group-hover:scale-120 transition-all" />
        </div>

        <div class="truncate flex flex-col gap-0">
            <h4>
                {{ file.name }}
            </h4>

            <div class="flex gap-1 justify-between items-center text-sm text-brand-400">
                <div>32.2mb</div>
                <div class="flex gap-1 items-center">12 <Icon icon="pixelarticons:arrow-bar-down" /></div>
            </div>
        </div>

        <div class="absolute -z-10 bg-brand-950 w-full h-full opacity-0 group-hover:opacity-50 transition-all rounded-3xl group-hover:scale-120" />
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { ref } from 'vue'

defineProps<{
    file: {
        url: string
        name: string
    }
}>()

const played = ref(false)
</script>

<template>
    <div :class="['flex flex-col gap-1 group relative isolate cursor-pointer w-32']">
        <div v-if="played" class="p-4 bg-dark-002 rounded-3xl flex items-center justify-center ring-3 ring-brand-900" @click="played = !played">
            <Icon icon="pixelarticons:pause" class="size-12 group-hover:scale-120 transition-all" />
        </div>
        <div v-else class="p-4 bg-brand-950 rounded-3xl flex items-center justify-center" @click="played = !played">
            <Icon icon="pixelarticons:play" class="size-12 group-hover:scale-120 transition-all" />
        </div>

        <div class="flex flex-col gap-0 shrink">
            <h4 class="truncate">
                {{ file.name }}
            </h4>

            <div class="flex gap-1 justify-between items-center text-sm text-brand-400">
                <div>32kb</div>
                <div class="flex gap-1 items-center">{{ file.download_count }} <Icon icon="pixelarticons:arrow-bar-down" /></div>
            </div>
        </div>

        <div class="absolute -z-10 bg-brand-950 w-full h-full opacity-0 group-hover:opacity-50 transition-all rounded-3xl group-hover:scale-120" />
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { ref } from 'vue'
import { File } from '@/global.interfaces'

defineProps<{
    file: File
}>()

const played = ref(false)
</script>

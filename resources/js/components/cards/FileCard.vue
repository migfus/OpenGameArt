<template>
    <div :class="['flex flex-col gap-1 group relative isolate cursor-pointer w-18']">
        <div v-if="formatToPreviewImage(file.file_url)" class="p-4 bg-brand-950 rounded-xl flex items-center justify-center border-3 border-brand-900">
            <img :src="formatToPreviewImage(file.file_url)" alt="Preview" class="w-full h-full object-cover rounded-xl" />
        </div>
        <div v-else-if="played" class="p-4 bg-dark-002 rounded-3xl flex items-center justify-center ring-3 ring-brand-900" @click="played = !played">
            <Icon icon="pixelarticons:pause" class="size-10 group-hover:scale-120 transition-all" />
        </div>
        <div v-else class="p-4 bg-brand-950 rounded-xl flex items-center justify-center aspect-square" @click="played = !played">
            <Icon icon="pixelarticons:play" class="size-10 group-hover:scale-120 transition-all" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { formatNumber, formatToPreviewImage, urlToFileExtension } from '@/utils/utils'
import { ref } from 'vue'
import { File } from '@/global.interfaces'

defineProps<{
    file: File
}>()

const played = ref(false)
</script>

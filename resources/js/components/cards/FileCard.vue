<template>
    <a
        :href="file.file_url"
        target="_blank"
        class="flex items-center justify-between gap-2 bg-brand-950 hover:bg-brand-900 text-affair-50 px-4 py-2 rounded-3xl cursor-pointer w-full min-w-0"
    >
        <div class="flex gap-2 items-center grow min-w-0">
            <img
                v-if="urlToFileExtension(file.file_url) == 'jpg' || urlToFileExtension(file.file_url) == 'jpeg' || urlToFileExtension(file.file_url) == 'png'"
                :src="file.file_url"
                alt="File Icon"
                class="size-4 object-cover rounded shrink-0"
            />
            <Icon v-else-if="urlToFileExtension(file.file_url) === 'zip'" icon="tabler:zip" />

            <p class="truncate min-w-0">
                {{ file.name }}
            </p>
        </div>

        <div class="flex gap-2 shrink-0">
            <div class="bg-dark-001 text-sm px-2 py-1 rounded-3xl flex items-center gap-1 shrink-0 whitespace-nowrap">
                <!-- FIXME: Not a backend data -->
                {{ formatNumber(3222) }} kb
                <Icon icon="pixelarticons:download-sharp" />
            </div>
            <div class="bg-dark-001 text-sm px-2 py-1 rounded-3xl flex items-center gap-1 shrink-0 whitespace-nowrap">
                {{ formatNumber(file.download_count) }}
                <Icon icon="pixelarticons:download-sharp" />
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { File } from '@/global.interfaces'
import { formatNumber, urlToFileExtension } from '@/utils/utils'

defineProps<{
    file: File
}>()
</script>

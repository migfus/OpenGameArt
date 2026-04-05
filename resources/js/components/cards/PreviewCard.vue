<template>
    <div
        v-if="$selected_preview"
        :class="[
            'flex flex-col gap-1 group isolate cursor-pointer w-18 h-16 bg-limed-spruce-600 rounded-xl items-center justify-center transition-all',
            $selected_preview.id === art_preview.id ? 'opacity-50 scale-90' : 'hover:opacity-80'
        ]"
        @click="$selected_preview = art_preview"
    >
        <img
            v-if="
                urlToFileExtension(art_preview.url) === 'png' ||
                urlToFileExtension(art_preview.url) === 'jpg' ||
                urlToFileExtension(art_preview.url) === 'jpeg' ||
                urlToFileExtension(art_preview.url) === 'gif'
            "
            :src="art_preview.url"
            alt="Preview"
            class="w-full h-full object-cover rounded-xl"
        />
        <Icon
            v-else-if="urlToFileExtension(art_preview.url) === 'mp3' || urlToFileExtension(art_preview.url) === 'ogg'"
            :icon="$selected_preview.id === art_preview.id ? 'pixelarticons:pause' : 'pixelarticons:play'"
            class="size-5"
        />
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { ArtPreview } from '@/global.interfaces'
import { urlToFileExtension } from '@/utils/utils'

defineProps<{
    art_preview: ArtPreview
}>()

const $selected_preview = defineModel<ArtPreview | null>()
</script>

<template>
    <div class="flex flex-col gap-2 sm:rounded-3xl h-80 2xl:h-130 relative overflow-hidden justify-between group bg-black">
        <div v-if="config.loading || !$selected_art_preview" class="absolute inset-0 animate-pulse bg-dark-002" />

        <div
            v-else-if="
                urlToFileExtension($selected_art_preview.url) === 'jpg' ||
                urlToFileExtension($selected_art_preview.url) === 'jpeg' ||
                urlToFileExtension($selected_art_preview.url) === 'png' ||
                urlToFileExtension($selected_art_preview.url) === 'gif'
            "
            class="absolute inset-0"
            :style="{
                backgroundImage: `url('${$selected_art_preview.url}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                backgroundColor: '#1a1a1a'
            }"
        />

        <!-- FIXME: Detect images from previews for album  -->
        <div
            v-else-if="urlToFileExtension($selected_art_preview.url) === 'mp3' || urlToFileExtension($selected_art_preview.url) === 'ogg'"
            class="absolute inset-0"
            :style="{
                backgroundImage: `url('${author?.image_url}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                backgroundColor: '#1a1a1a'
            }"
        >
            <audio
                ref="audioRef"
                :src="$selected_art_preview.url"
                preload="metadata"
                class="hidden"
                @loadedmetadata="handleAudioLoadedMetadata"
                @timeupdate="handleAudioTimeUpdate"
                @ended="handleAudioEnded"
            />

            <div class="flex flex-col gap-0 justify-end h-full p-4">
                <div>
                    <div class="flex items-center flex-1">
                        <input
                            id="range"
                            type="range"
                            min="0"
                            :max="audioDuration"
                            :value="audioCurrentTime"
                            step="0.1"
                            @input="handleAudioSeek"
                            class="block w-full py-2 bg-white border border-brand-950 rounded-md focus:border-blue-500 accent-brand-400"
                        />
                    </div>
                </div>
                <div class="flex gap-2">
                    <button @click="togglePlayback" class="bg-brand-950 p-3 rounded-xl cursor-pointer">
                        <Icon v-if="played" icon="pixelarticons:pause" class="size-6" />
                        <Icon v-else icon="pixelarticons:play" class="size-6" />
                    </button>
                    <button class="bg-brand-950 p-3 rounded-xl cursor-pointer">
                        <Icon icon="pixelarticons:volume" class="size-6" />
                    </button>
                </div>
            </div>
        </div>

        <div
            v-else
            class="absolute inset-0"
            :style="{
                backgroundImage: `url('${$selected_art_preview.url}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                backgroundColor: '#1a1a1a'
            }"
        >
            ???
        </div>

        <div v-if="art_previews.length > 1" class="absolute opacity-0 w-full h-full group-hover:opacity-100 transition-all">
            <div
                @click="previewNavigation('prev')"
                class="absolute left-0 bg-linear-to-l from-black/0 via-black/0 to-black/60 w-32 h-full flex items-center cursor-pointer"
            >
                <Icon icon="pixelarticons:arrow-left" class="size-5 text-brand-100 mx-4" />
            </div>
            <div
                @click="previewNavigation('next')"
                class="absolute right-0 bg-linear-to-r from-black/0 via-black/0 to-black/60 w-32 h-full flex items-center justify-end cursor-pointer"
            >
                <Icon icon="pixelarticons:arrow-right" class="size-5 text-brand-100 mx-4" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'
import { ArtPreview, User } from '@/global.interfaces'
import { urlToFileExtension } from '@/utils/utils'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const $artStore = useArtStore()
const { config } = storeToRefs($artStore)

const { art_previews } = defineProps<{
    art_previews: ArtPreview[]
    author?: User
}>()

const $selected_art_preview = defineModel<ArtPreview | null>()
const played = ref(true)
const audioRef = ref<HTMLAudioElement | null>(null)
const audioDuration = ref(0)
const audioCurrentTime = ref(0)

function isAudioFile(url: string) {
    const fileExtension = urlToFileExtension(url).toLowerCase()
    return fileExtension === 'mp3' || fileExtension === 'ogg' || fileExtension === 'wav' || fileExtension === 'flac' || fileExtension === 'aac'
}

async function playAudio() {
    if (!audioRef.value) {
        played.value = false
        return
    }

    try {
        await audioRef.value.play()
        played.value = true
    } catch {
        // Browser autoplay policies can block playback without user interaction.
        played.value = false
    }
}

function pauseAudio() {
    if (!audioRef.value) {
        played.value = false
        return
    }

    audioRef.value.pause()
    played.value = false
}

function resetAudioTimeline() {
    audioDuration.value = 0
    audioCurrentTime.value = 0
}

function handleAudioLoadedMetadata() {
    if (!audioRef.value) return
    audioDuration.value = Number.isFinite(audioRef.value.duration) ? audioRef.value.duration : 0
}

function handleAudioTimeUpdate() {
    if (!audioRef.value) return
    audioCurrentTime.value = audioRef.value.currentTime
}

function handleAudioSeek(event: Event) {
    if (!audioRef.value) return

    const target = event.target as HTMLInputElement
    const seekTime = Number(target.value)
    if (!Number.isFinite(seekTime)) return

    audioRef.value.currentTime = seekTime
    audioCurrentTime.value = seekTime
}

async function togglePlayback() {
    if (!audioRef.value) return

    if (audioRef.value.paused) {
        await playAudio()
        return
    }

    pauseAudio()
}

function handleAudioEnded() {
    played.value = false
    audioCurrentTime.value = 0
}

function previewNavigation(direction: 'prev' | 'next') {
    if (!$selected_art_preview.value) return

    const currentIndex = art_previews.findIndex((preview) => preview.id === $selected_art_preview.value?.id)
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1

    if (newIndex < 0) newIndex = art_previews.length - 1
    else if (newIndex >= art_previews.length) newIndex = 0

    $selected_art_preview.value = art_previews[newIndex]
}

watch(
    $selected_art_preview,
    async (updated_selected_art_preview) => {
        if (!updated_selected_art_preview) {
            pauseAudio()
            resetAudioTimeline()
            return
        }

        if (isAudioFile(updated_selected_art_preview.url)) {
            await nextTick()

            if (audioRef.value) {
                audioRef.value.currentTime = 0
                audioCurrentTime.value = 0
            }

            await playAudio()
            return
        }

        pauseAudio()
        resetAudioTimeline()
    },
    { immediate: true }
)

onBeforeUnmount(() => {
    pauseAudio()
})
</script>

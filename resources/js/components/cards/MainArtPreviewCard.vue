<template>
    <div class="flex flex-col gap-2 sm:rounded-3xl h-auto relative overflow-hidden justify-between group bg-black">
        <div v-if="config.loading || !$selected_art_preview" class="absolute inset-0 animate-pulse bg-dark-002" />

        <!-- SECTION: Image Preview -->
        <div v-else-if="filePreviewType($selected_art_preview.url) === 'image'" ref="imageContainerRef" :style="imageContainerStyle" class="overflow-hidden">
            <div ref="imageContentRef" class="h-auto">
                <img :src="$selected_art_preview.url" alt="Art Preview" class="block w-full h-full" />

                <div class="flex gap-2 py-2 px-4 justify-between items-center">
                    <a :href="$selected_art_preview.url" target="_blank" rel="noopener noreferrer" class="bg-brand-950 p-2 rounded-xl px-4 cursor-pointer">
                        <Icon icon="akar-icons:enlarge" class="size-4" />
                    </a>

                    <div v-if="art_previews.length > 1" class="flex gap-2">
                        <button @click="previewNavigation('prev')" class="bg-brand-950 p-2 rounded-xl px-4 cursor-pointer">
                            <Icon icon="pixelarticons:arrow-left" class="size-4" />
                        </button>
                        <button @click="previewNavigation('next')" class="bg-brand-950 p-2 rounded-xl px-4 cursor-pointer">
                            <Icon icon="pixelarticons:arrow-right" class="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION: Audio Preview -->
        <!-- FIXME: Detect images from previews for album  -->
        <div v-else-if="filePreviewType($selected_art_preview.url) === 'audio'" :style="imageContainerStyle" class="overflow-hidden">
            <audio
                ref="audioRef"
                :src="$selected_art_preview.url"
                preload="metadata"
                class="hidden"
                @loadedmetadata="handleAudioLoadedMetadata"
                @timeupdate="handleAudioTimeUpdate"
                @ended="handleAudioEnded"
            />

            <div class="flex flex-col gap-0 justify-end p-0">
                <div class="flex justify-center mt-4">
                    <img :src="author?.image_url" alt="Art Preview" class="block size-64 object-cover rounded-3xl pixelated-img" />
                </div>

                <div class="flex items-center flex-1 px-4">
                    <input
                        id="range"
                        type="range"
                        min="0"
                        :max="audioDuration"
                        :value="audioCurrentTime"
                        step="0.1"
                        @input="handleAudioSeek"
                        class="block w-full py-2 bg-white border border-brand-950 rounded-md focus:border-blue-500 accent-brand-400 cursor-pointer"
                    />
                </div>

                <div class="flex gap-2 py-2 px-4 justify-between items-center">
                    <div class="flex gap-2 relative">
                        <button @click="togglePlayback" class="bg-brand-950 p-3 rounded-xl cursor-pointer">
                            <Icon v-if="played" icon="pixelarticons:pause" class="size-6" />
                            <Icon v-else icon="pixelarticons:play" class="size-6" />
                        </button>
                        <VolumeDropdown />
                    </div>

                    <div v-if="art_previews.length > 1" class="flex gap-2">
                        <button @click="previewNavigation('prev')" class="bg-brand-950 rounded-xl p-3 cursor-pointer">
                            <Icon icon="pixelarticons:arrow-left" class="size-6" />
                        </button>
                        <button @click="previewNavigation('next')" class="bg-brand-950 rounded-xl p-3 cursor-pointer">
                            <Icon icon="pixelarticons:arrow-right" class="size-6" />
                        </button>
                    </div>
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

        <!-- <div v-if="art_previews.length > 1" class="absolute opacity-0 w-full h-full group-hover:opacity-100 transition-all">
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
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import VolumeDropdown from '../navigations/VolumeDropdown.vue'

import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'
import { ArtPreview, User } from '@/global.interfaces'
import { filePreviewType, urlToFileExtension } from '@/utils/utils'
import { CSSProperties, nextTick, onBeforeUnmount, ref, watch } from 'vue'

const $artStore = useArtStore()
const { config, audio_volume } = storeToRefs($artStore)

const { art_previews } = defineProps<{
    art_previews: ArtPreview[]
    author?: User
}>()

const $selected_art_preview = defineModel<ArtPreview | null>()
const played = ref(true)
const audioRef = ref<HTMLAudioElement | null>(null)
const audioDuration = ref(0)
const audioCurrentTime = ref(0)
const imageContentRef = ref<HTMLDivElement | null>(null)
const imageContainerRef = ref<HTMLDivElement | null>(null)
const imageContainerStyle = ref<CSSProperties>({})
let imageHeightResetTimer: ReturnType<typeof setTimeout> | null = null

function isAudioFile(url: string) {
    const fileExtension = urlToFileExtension(url).toLowerCase()
    return fileExtension === 'mp3' || fileExtension === 'ogg' || fileExtension === 'wav' || fileExtension === 'flac' || fileExtension === 'aac'
}

function isImageFile(url: string) {
    const fileExtension = urlToFileExtension(url).toLowerCase()
    return fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'gif' || fileExtension === 'webp'
}

async function waitForImageRender() {
    await nextTick()

    const currentImage = imageContentRef.value?.querySelector('img')
    if (!currentImage) return
    if (currentImage.complete) return

    await new Promise<void>((resolve) => {
        const onLoad = () => {
            currentImage.removeEventListener('load', onLoad)
            currentImage.removeEventListener('error', onLoad)
            resolve()
        }

        currentImage.addEventListener('load', onLoad, { once: true })
        currentImage.addEventListener('error', onLoad, { once: true })
    })
}

async function animateImageHeightChange() {
    const container = imageContainerRef.value
    if (!container) return

    const previousHeight = container.offsetHeight
    if (previousHeight <= 0) {
        imageContainerStyle.value = {}
        return
    }

    imageContainerStyle.value = {
        height: `${previousHeight}px`,
        overflow: 'hidden',
        transition: 'height 280ms cubic-bezier(0.4, 0, 0.2, 1)'
    }

    await waitForImageRender()

    const nextHeight = imageContentRef.value?.offsetHeight ?? container.scrollHeight
    if (!nextHeight || nextHeight === previousHeight) {
        imageContainerStyle.value = {}
        return
    }

    requestAnimationFrame(() => {
        imageContainerStyle.value = {
            ...imageContainerStyle.value,
            height: `${nextHeight}px`
        }
    })

    if (imageHeightResetTimer) {
        clearTimeout(imageHeightResetTimer)
    }

    imageHeightResetTimer = setTimeout(() => {
        imageContainerStyle.value = {}
        imageHeightResetTimer = null
    }, 320)
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

        if (isImageFile(updated_selected_art_preview.url)) {
            await animateImageHeightChange()
        }

        pauseAudio()
        resetAudioTimeline()
    },
    { immediate: true }
)

watch(audio_volume, (vol) => {
    if (!audioRef.value) return
    audioRef.value.volume = Math.max(0, Math.min(1, vol ?? 1))
})

onBeforeUnmount(() => {
    if (imageHeightResetTimer) {
        clearTimeout(imageHeightResetTimer)
        imageHeightResetTimer = null
    }

    pauseAudio()
})
</script>

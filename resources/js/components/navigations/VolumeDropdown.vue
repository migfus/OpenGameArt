<template>
    <div ref="wrapperRef" class="relative inline-block">
        <button @click="isOpen = !isOpen" class="bg-brand-950 p-3 rounded-xl cursor-pointer">
            <Icon
                :icon="
                    (audio_volume ?? 1) > 0.75
                        ? 'pixelarticons:volume-3'
                        : (audio_volume ?? 1) > 0.5
                          ? 'pixelarticons:volume-2'
                          : (audio_volume ?? 1) > 0.25
                            ? 'pixelarticons:volume-1'
                            : (audio_volume ?? 1) > 0
                              ? 'pixelarticons:volume'
                              : 'pixelarticons:volume-x'
                "
                class="size-6 text-brand-300"
            />
        </button>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <div
                v-show="isOpen"
                class="absolute left-0 bottom-full mb-2 z-20 w-64 origin-bottom-left rounded-xl bg-dark-001/90 shadow-lg backdrop-blur-sm border border-brand-950 p-3 flex flex-col gap-2"
            >
                <div class="flex items-center gap-2">
                    <button class="bg-brand-950 rounded-lg p-2 cursor-pointer" @click="audio_volume == 0 ? (audio_volume = 1) : (audio_volume = 0)">
                        <Icon
                            :icon="
                                (audio_volume ?? 1) > 0.75
                                    ? 'pixelarticons:volume-3'
                                    : (audio_volume ?? 1) > 0.5
                                      ? 'pixelarticons:volume-2'
                                      : (audio_volume ?? 1) > 0.25
                                        ? 'pixelarticons:volume-1'
                                        : (audio_volume ?? 1) > 0
                                          ? 'pixelarticons:volume'
                                          : 'pixelarticons:volume-x'
                            "
                            class="size-5 text-brand-300 shrink-0"
                        />
                    </button>

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        :value="audio_volume"
                        @input="onVolumeInput"
                        class="w-full accent-brand-400 cursor-pointer"
                    />
                </div>
                <!-- <div class="text-brand-400 text-xs text-right">{{ Math.round((audio_volume ?? 1) * 100) }}%</div> -->
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'

const $artStore = useArtStore()
const { audio_volume } = storeToRefs($artStore)

const isOpen = ref(false)
const wrapperRef = ref<HTMLDivElement | null>(null)

function onVolumeInput(event: Event) {
    if (audio_volume.value >= 0) {
        audio_volume.value = Number((event.target as HTMLInputElement).value)
    }
}

function onClickOutside(event: MouseEvent) {
    if (wrapperRef.value && !wrapperRef.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', onClickOutside))
</script>

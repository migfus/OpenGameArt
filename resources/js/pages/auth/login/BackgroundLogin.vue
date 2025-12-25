<template>
    <div>
        <DataTransition class="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 gap-4 relative">
            <div v-for="(offset, i) in offsets" :key="i" class="h-full overflow-hidden">
                <div class="grid gap-4 animate-scroll" :style="{ animationDuration: durations[i] + 's' }">
                    <!-- duplicated list for seamless loop -->
                    <template v-for="n in 2" :key="n" class="">
                        <img
                            v-for="item in shuffleArray($authStore.art_previews)"
                            :key="item.url + n"
                            class="h-auto w-full rounded-lg bg-brand-950 opacity-50"
                            :src="item.url"
                        />
                    </template>
                </div>
            </div>
        </DataTransition>

        <AutenticationWarningModal v-model="open_modal" />
    </div>
</template>

<script setup lang="ts">
import DataTransition from '@/components/transitions/DataTransition.vue'
import AutenticationWarningModal from '@/components/modals/AutenticationWarningModal.vue'

import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const $authStore = useAuthStore()

const offsets = [0, 10, 20, 30, 40, 50, 60, 70]
const durations = [
    randomInt(120, 200),
    randomInt(120, 200),
    randomInt(120, 200),
    randomInt(120, 200),
    randomInt(120, 200),
    randomInt(120, 200),
    randomInt(120, 200),
    randomInt(120, 200)
] // different speeds = organic feel
const app_url = window.location.origin
const open_modal = ref(true)

function shuffleArray<T>(array: T[]): T[] {
    const result = [...array]
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>

<style scoped>
@keyframes scroll-up {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-50%);
    }
}

.animate-scroll {
    animation-name: scroll-up;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
</style>

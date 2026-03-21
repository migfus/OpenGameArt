<template>
    <div class="flex flex-col gap-4 lg:flex-row p-4">
        <div class="grow flex flex-col gap-2">
            <PreviewCard />

            <div class="flex gap-2">
                <FIleCard v-for="item in files" :file="item" />
            </div>
        </div>
        <div class="w-64 flex flex-col gap-4">
            <ArtCard v-for="(item, idx) in weekly_arts" :art="item" :idx />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import PreviewCard from '@/components/others/PreviewCard.vue'
import { useArtStore } from '@/stores/art.store'
import ArtCard from '@/components/cards/ArtCard.vue'
import FIleCard from '@/components/others/FIleCard.vue'

const $artStore = useArtStore()
const { weekly_arts } = storeToRefs($artStore)

const files = [
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    }
]
</script>

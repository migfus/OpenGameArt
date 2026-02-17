<template>
    <div class="flex flex-col gap-4">
        <SearchCard />
        <ArtCategorySection :arts="arts" :loading="config.loading" title="Arts" more="/" />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ArtCategorySection from '../home/ArtCategorySection.vue'
import SearchCard from './SearchCard.vue'

import { useArtStore } from '@/stores/artStore'
import { onMounted } from 'vue'

const $artStore = useArtStore()
const { arts, config } = storeToRefs($artStore)
const { getArts } = $artStore

onMounted(() => {
    getArts()
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <SearchCard />
        <ArtCategorySection :arts="arts" :loading="config.loading" title="Arts" more="/" />
    </div>
</template>

<script setup lang="ts">
import ArtCategorySection from './ArtCategorySection.vue'
import SearchCard from './SearchCard.vue'

import { useArtStore } from '@/stores/artStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const $artStore = useArtStore()
const { arts, config, search_filters } = storeToRefs($artStore)

const $route = useRoute()
</script>

<template>
    <div class="flex flex-col gap-4">
        <SearchCard />
        <ArtCategorySection title="Arts" more="/" />
    </div>
</template>

<script setup lang="ts">
import ArtCategorySection from '@/components/others/ArtCategorySectionExplore.vue'
import SearchCard from '@/components/others/SearchCard.vue'

import { onMounted } from 'vue'

onMounted(() => {
    document.title = 'Explore | OGA (Not Official)'
})
</script>

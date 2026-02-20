<template>
    <div class="flex flex-col gap-4">
        <SearchCard />
        <ArtCategorySection title="Arts" more="/" />
    </div>
</template>

<script setup lang="ts">
import ArtCategorySection from './ArtCategorySection.vue'
import SearchCard from './SearchCard.vue'
</script>

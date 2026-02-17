<template>
    <div class="flex flex-col gap-4 mb-8">
        <NotifyBanner />
        <!-- <CarouselCard /> -->
        <HeroCard />
        <ArtCategorySection :arts="weekly_arts" :loading="config.loading" title="Weekly Popular" more="https://opengameart.org/popular" />
        <ArtCategorySection :arts :loading="config.loading" title="New Arts" more="https://opengameart.org/latest" />

        <PostCategorySection :posts="posts" :loading="config.loading" />
    </div>
</template>

<script setup lang="ts">
import NotifyBanner from '@/components/header/NotifyBanner.vue'
import ArtCategorySection from './ArtCategorySection.vue'
import PostCategorySection from './PostCategorySection.vue'

import { useArtStore } from '@/stores/artStore'
import { storeToRefs } from 'pinia'
import HeroCard from './HeroCard.vue'
import { useNavigationStore } from '@/stores/navigationStore'

const $artStore = useArtStore()
const $navigationStore = useNavigationStore()

const { arts, weekly_arts } = storeToRefs($artStore)
const { posts, config } = storeToRefs($navigationStore)
</script>

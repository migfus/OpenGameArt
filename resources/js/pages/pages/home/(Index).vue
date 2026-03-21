<template>
    <div class="flex flex-col gap-4 mb-8">
        <NotifyBanner />
        <!-- <CarouselCard /> -->
        <HeroCard />
        <ArtCategorySection :arts="weekly_arts" :loading="config.loading" title="Weekly Popular" more="https://opengameart.org/popular" />
        <ArtCategorySection :arts="new_arts" :loading="config.loading" title="New Arts" more="https://opengameart.org/latest" />

        <PostCategorySection :posts="recent_posts" :loading="config.loading" />
    </div>
</template>

<script setup lang="ts">
import NotifyBanner from '@/components/header/NotifyBanner.vue'
import ArtCategorySection from './ArtCategorySection.vue'
import PostCategorySection from './PostCategorySection.vue'

import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'
import HeroCard from './HeroCard.vue'
import { useNavigationStore } from '@/stores/navigation.store'
import { usePostStore } from '@/stores/post.store'

const $artStore = useArtStore()
const $navigationStore = useNavigationStore()
const $postStore = usePostStore()

const { new_arts, weekly_arts } = storeToRefs($artStore)
const { config } = storeToRefs($navigationStore)
const { recent_posts } = storeToRefs($postStore)
</script>

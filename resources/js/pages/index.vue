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
import ArtCategorySection from '@/components/others/ArtCategorySection.vue'
import PostCategorySection from '@/components/others/PostCategorySection.vue'

import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'
import HeroCard from '@/components/others/HeroCard.vue'
import { useNavigationStore } from '@/stores/navigation.store'
import { usePostStore } from '@/stores/post.store'
import { onMounted } from 'vue'

const $artStore = useArtStore()
const $navigationStore = useNavigationStore()
const $postStore = usePostStore()

const { new_arts, weekly_arts } = storeToRefs($artStore)
const { config } = storeToRefs($navigationStore)
const { recent_posts } = storeToRefs($postStore)

onMounted(() => {
    document.title = 'Home | OGA (Not Official)'
})
</script>

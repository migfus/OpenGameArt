<template>
    <div class="flex flex-col gap-4 px-6">
        <TotalResultSection :search_url :total_result="total_result" :loading="config.loading" />

        <DataTransition class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 line-clamp-2 overflow-visible pb-8">
            <ArtCardLoader
                v-if="config.loading"
                v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
                :style="{ animationDelay: `${(item * animation_delay) / 4}ms`, transitionDelay: `${(item * animation_delay) / 4}ms` }"
                @animationend.once="clearDelays"
                @transitionend.once="clearDelays"
            />
            <ArtCard
                v-else
                v-for="(item, idx) in arts"
                :art="item"
                :idx
                :style="{ animationDelay: `${(idx * animation_delay) / 4}ms`, transitionDelay: `${(idx * animation_delay) / 4}ms` }"
                @animationend.once="clearDelays"
                @transitionend.once="clearDelays"
            />
        </DataTransition>

        <div v-if="config.lazy_loading" class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 line-clamp-2 overflow-visible pb-8">
            <ArtCardLoader
                v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
                :style="{ animationDelay: `${(item * animation_delay) / 4}ms`, transitionDelay: `${(item * animation_delay) / 4}ms` }"
                @animationend.once="clearDelays"
                @transitionend.once="clearDelays"
            />
        </div>

        <div v-if="total_result <= 0" class="bg-dark-002 px-4 py-2 rounded-3xl text-center">
            <p>No results found</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArtCard from '@/components/cards/ArtCard.vue'
import ArtCardLoader from '@/components/cards/ArtCardLoader.vue'
import DataTransition from '@/components/transitions/DataTransition.vue'
import TotalResultSection from '@/components/content/TotalResultSection.vue'

import { useArtStore } from '@/stores/art.store'
import { animation_delay, clearDelays, formatNumber } from '@/utils/utils'
import { notify } from 'notiwind'
import { storeToRefs } from 'pinia'

const $artStore = useArtStore()
const { total_result, search_query, config, arts, search_url } = storeToRefs($artStore)
const { lazyGetArts } = $artStore

import { onBeforeUnmount, onMounted } from 'vue'

const SCROLL_COOLDOWN_MS = 500
let nextLazyLoadAt = 0
let nextEndNoticeAt = 0

function handleScroll() {
    // calculate how far from bottom
    const scrollY = window.scrollY || window.pageYOffset
    const visibleHeight = window.innerHeight
    const pageHeight = document.documentElement.scrollHeight
    const now = Date.now()

    if (arts.value.length % 24 !== 0) {
        config.value.lazy_loading = false
        if (now >= nextEndNoticeAt) {
            // notify({
            //     group: 'success',
            //     title: `You've reached the end of the results`,
            //     content: 'No more arts to load'
            // })
            nextEndNoticeAt = now + SCROLL_COOLDOWN_MS
        }
        return
    }

    if (scrollY + visibleHeight >= pageHeight - 10) {
        if (now < nextLazyLoadAt) return

        if (config.value.lazy_loading === false) {
            nextLazyLoadAt = now + SCROLL_COOLDOWN_MS
            config.value.lazy_page++
            lazyGetArts()
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

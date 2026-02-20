<template>
    <div class="flex flex-col gap-4 px-6">
        <div class="flex justify-between gap-2">
            <p v-if="total_result">{{ total_result > 0 ? `${total_result} Total Results` : `${total_result} Total Result` }}</p>
            <a
                :href="`https://opengameart.org/art-search-advanced?keys=${search_filters.search}&title=&field_art_tags_tid_op=or&field_art_tags_tid=&name=&field_art_type_tid%5B%5D=9&field_art_type_tid%5B%5D=10&field_art_type_tid%5B%5D=7273&field_art_type_tid%5B%5D=14&field_art_type_tid%5B%5D=12&field_art_type_tid%5B%5D=13&field_art_type_tid%5B%5D=11&sort_by=score&sort_order=DESC&items_per_page=24&Collection=`"
                >Go to OpenGameArt.org</a
            >
        </div>

        <DataTransition class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 line-clamp-2 overflow-visible pb-8">
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
    </div>
</template>

<script setup lang="ts">
import ArtCard from '@/components/cards/ArtCard.vue'
import ArtCardLoader from '@/components/cards/ArtCardLoader.vue'
import DataTransition from '@/components/transitions/DataTransition.vue'

import { useArtStore } from '@/stores/artStore'
import { animation_delay, clearDelays } from '@/utils/utils'
import { storeToRefs } from 'pinia'

const $artStore = useArtStore()
const { total_result, search_filters, config, arts } = storeToRefs($artStore)
const { lazyGetArts } = $artStore

import { onBeforeUnmount, onMounted } from 'vue'

function handleScroll() {
    // calculate how far from bottom
    const scrollY = window.scrollY || window.pageYOffset
    const visibleHeight = window.innerHeight
    const pageHeight = document.documentElement.scrollHeight

    if (scrollY + visibleHeight >= pageHeight - 10) {
        // alert('bottom')
        if (config.value.lazy_loading == false) {
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

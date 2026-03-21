<template>
    <div :class="[showFooter ? 'translate-y-0' : 'translate-y-full', 'fixed bg-dark-001/75 backdrop-blur-lg bottom-0 w-full gap-2 transition-all z-20']">
        <RouterLink
            v-for="item in bottom_navigations"
            :to="item.href"
            :class="[
                $route.path === item.href ? 'bg-brand-950/75 backdrop-blur-lg' : 'hover:bg-brand-950',
                'flex flex-col items-center py-2 flex-1 transition-all'
            ]"
        >
            <Icon :icon="item.icon" class="size-6" />
            <p class="text-sm">{{ item.display_name }}</p>
        </RouterLink>

        <div
            @click="$sidebar_open_model = true"
            :class="[$sidebar_open_model ? 'bg-brand-950' : 'hover:bg-brand-950', 'flex flex-col items-center py-2 flex-1 cursor-pointer transition-all']"
        >
            <Icon icon="memory:format-align-justify" class="size-6" />
            <p class="text-sm">More</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'

const $sidebar_open_model = defineModel<boolean>()
const $route = useRoute()

const bottom_navigations = [
    {
        display_name: 'Home',
        icon: 'memory:home-thatched',
        href: '/'
    },
    {
        display_name: 'Explore',
        icon: 'memory:search',
        href: '/arts'
    },
    {
        display_name: 'Forums',
        icon: 'memory:chat',
        href: '/forums'
    },
    {
        display_name: 'Art Collections',
        icon: 'pixelarticons:heart',
        href: '/collections'
    }
]

const showFooter = ref(true)
let lastScroll = 0

const handleScroll = () => {
    const current = window.scrollY

    if (current > lastScroll) {
        // scrolling down → hide
        showFooter.value = false
    } else {
        // scrolling up → show
        showFooter.value = true
    }

    lastScroll = current
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

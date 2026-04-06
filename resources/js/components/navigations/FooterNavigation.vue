<template>
    <div
        :class="[
            show_mobile_navigation_footer ? 'translate-y-0' : 'translate-y-full',
            'fixed bg-brand-950 bottom-0 w-full gap-2 transition-all z-20 shadow-2xl'
        ]"
    >
        <RouterLink
            v-for="item in bottom_navigations"
            :to="item.href"
            :class="[$route.path === item.href ? 'bg-brand-900' : 'hover:bg-brand-900', 'flex flex-col items-center py-2 flex-1 transition-all']"
        >
            <Icon :icon="item.icon" class="size-6" />
            <p class="text-sm">{{ item.display_name }}</p>
        </RouterLink>

        <div
            @click="$sidebar_open_model = true"
            :class="[$sidebar_open_model ? 'bg-brand-950' : 'hover:bg-brand-900', 'flex flex-col items-center py-2 flex-1 cursor-pointer transition-all']"
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
import { useNavigationStore } from '@/stores/navigation.store'
import { storeToRefs } from 'pinia'

const $sidebar_open_model = defineModel<boolean>()
const $route = useRoute()
const $navigationStore = useNavigationStore()
const { show_mobile_navigation_footer } = storeToRefs($navigationStore)

const bottom_navigations = [
    {
        display_name: 'Home',
        icon: 'memory:home-thatched',
        href: '/'
    },
    {
        display_name: 'Collections',
        icon: 'pixelarticons:heart',
        href: '/collections'
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
    }
]

let lastScroll = 0

const handleScroll = () => {
    const current = window.scrollY

    if (current > lastScroll) {
        // scrolling down → hide
        show_mobile_navigation_footer.value = false
    } else {
        // scrolling up → show
        show_mobile_navigation_footer.value = true
    }

    lastScroll = current
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

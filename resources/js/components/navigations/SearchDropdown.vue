<template>
    <Menu as="div" class="text-left flex items-center -mr-3 relative z-20">
        <AppButton href="/explore" iconOnly icon="pixelarticons:search" class="sm:hidden" />
        <form v-if="$route.path !== '/explore'" @submit.prevent="submit_search()" class="hidden sm:flex" ref="input_ref">
            <AppInput name="Search" v-model="search_filters.search" noLabel placeholder="Search" @focus="(focus: boolean) => (open_search_menu = focus)" />
        </form>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                v-if="open_search_menu"
                static
                class="absolute right-0 top-7 z-20 mt-2 w-50 origin-top-right rounded-3xl bg-dark-001/90 shadow-lg backdrop-blur-sm border border-brand-950"
            >
                <div class="py-2 first:rounded-t-3xl last:rounded-b-3xl">
                    <MenuItem v-if="search_filters.search" v-slot="{ active }">
                        <RouterLink
                            :to="`/explore?search=${search_filters.search}`"
                            :class="[active ? 'bg-brand-950 ' : '', ' text-brand-300 px-4 py-2 text-sm flex gap-2 items-center ']"
                        >
                            <p class="truncate-start">{{ search_filters.search }}</p>
                        </RouterLink>
                    </MenuItem>
                    <MenuItem v-for="item in [...search_history].reverse()" v-slot="{ active }">
                        <RouterLink
                            :to="`/explore?search=${item.content}`"
                            :class="[active ? 'bg-brand-950 ' : '', ' text-brand-300 px-4 py-2 text-sm flex gap-2 items-center justify-between']"
                        >
                            <p class="truncate">{{ item.content }}</p>
                            <p class="">{{ timeAgo(item.created_at) }}</p>
                        </RouterLink>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuItem, MenuItems } from '@headlessui/vue'
import AppButton from '../form/AppButton.vue'
import AppInput from '../form/AppInput.vue'

import { useSearchStore } from '@/stores/searchStore'
import { timeAgo } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const $searchStore = useSearchStore()
const { search_history, search_filters } = storeToRefs($searchStore)
const { submit_search } = $searchStore

const open_search_menu = ref<boolean>(false)
</script>

<template>
    <Menu as="div" class="inline-block text-left">
        <div>
            <MenuButton>
                <div class="relative cursor-pointer">
                    <img
                        :src="$authStore.auth.image_url"
                        class="size-8 rounded-full ring-2 ring-brand-900 transition-all hover:ring-4 cursor-pointer"
                        :alt="$authStore.auth.username"
                    />
                    <Icon icon="pixelarticons:chevron-down" class="size-4 absolute bottom-0 right-0 bg-dark-001 rounded" />
                </div>
            </MenuButton>
        </div>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems class="absolute right-2 z-20 mt-2 w-48 origin-top-right rounded-xl bg-dark-001/90 shadow-lg backdrop-blur-sm border border-brand-950">
                <div class="py-2">
                    <MenuItem v-for="item in account_profile_menus" v-slot="{ active }">
                        <RouterLink :to="item.href" :class="[active ? 'bg-brand-950 ' : '', ' text-brand-300 px-4 py-2 text-sm flex gap-2 items-center']">
                            <Icon :icon="item.icon" class="size-4" />
                            <p>{{ item.name }}</p>
                        </RouterLink>
                    </MenuItem>

                    <form @submit.prevent="$authStore.logout()">
                        <MenuItem v-slot="{ active }">
                            <button
                                type="submit"
                                :class="[
                                    active ? 'bg-brand-950' : '',
                                    ' text-brand-300 w-full px-4 py-2 text-left text-sm cursor-pointer flex gap-2 items-center'
                                ]"
                            >
                                <Icon v-if="$authStore.config.loading" icon="memory:border-bottom" class="size-4 retro-spinner" />
                                <Icon v-else icon="pixelarticons:logout" class="size-4" />
                                <p>Sign out</p>
                            </button>
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Icon } from '@iconify/vue'

import { useAuthStore } from '@/stores/authStore'

const $authStore = useAuthStore()

const account_profile_menus = [
    {
        href: { name: 'dashboard' },
        name: 'Dashboard',
        icon: 'pixelarticons:grid'
    },
    {
        href: { name: 'account-settings' },
        name: 'Account Settings',
        icon: 'memory:dot-hexagon'
    }
]
</script>

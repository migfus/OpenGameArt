<template>
    <div
        :class="[
            'bg-brand-950 px-6 py-2 font-semibold flex justify-between gap-2 text-brand-200 h-18 border-b border-brand-900 overflow-hidden transition-all duration-500'
        ]"
        :style="{ height: `${$top_navigation_hidden ? '0px' : '70px'}` }"
    >
        <!-- SECTION LEFT  -->
        <div class="flex gap-4 items-center overflow-y-auto">
            <RouterLink to="/" class="flex gap-4 items-center">
                <img :src="`${app_url}/images/icon.png`" class="size-10 image-rendering-pixelated" style="image-rendering: pixelated" />
                <p class="text-3xl anek-latin hidden md:flex">OpenGameArt.org</p>
                <p class="absolute rotate-5 bg-yellow-900/75 px-20 hidden md:flex text-yellow-50 text-lg">Not Official</p>
                <p class="absolute rotate-15 bg-yellow-900/75 text-yellow-50 md:hidden">Not Official</p>
            </RouterLink>
            <!--
            <RouterLink to="/" class="gap-4 items-center hidden md:flex">
                <BasicTransition>
                    <p v-if="$navigationStore.config.loading" class="text-xs press-start-2p-regular flex flex-wrap w-64 text-center rotate-4 absolute">
                        Somethin' cookin'...
                    </p>
                    <p v-else class="text-xs press-start-2p-regular flex flex-wrap w-64 text-center rotate-4 absolute line-clamp-2">
                        {{ $navigationStore.latest_banner_title }}
                    </p>
                </BasicTransition>
            </RouterLink> -->
        </div>

        <!-- SECTION: RIGHT -->
        <div class="flex gap-4 items-center">
            <Icon icon="memory:search" class="size-6 text-brand-200 inline lg:hidden" />
            <AppInput name="Search" v-model="search" noLabel placeholder="Search" class="hidden lg:flex" />

            <AppButton size="sm" icon="memory:plus" icon_only class="inline lg:hidden" />
            <AppButton size="sm" icon="memory:plus" class="lg:flex hidden">Submit Art</AppButton>

            <Icon icon="pixelarticons:volume-2" class="size-6 text-brand-200 transition-all rounded hover:bg-dark-001 cursor-pointer" />
            <Icon icon="pixelarticons:notification" class="size-6 text-brand-200 transition-all rounded hover:bg-dark-001 cursor-pointer" />

            <ProfileDropdown v-if="$authStore.auth" />

            <RouterLink v-else :to="{ name: 'login' }" class="relative cursor-pointer">
                <AppButton icon="memory:login">Sign Up</AppButton>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProfileDropdown from '@/components/navigations/ProfileDropdown.vue'
import { Icon } from '@iconify/vue'
import AppButton from '../form/AppButton.vue'
import AppInput from '../form/AppInput.vue'

import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'

const $top_navigation_hidden = defineModel<boolean>('top_navigation_hidden', { required: true })
const $authStore = useAuthStore()

const search = ref('')
const app_url = window.location.origin
</script>

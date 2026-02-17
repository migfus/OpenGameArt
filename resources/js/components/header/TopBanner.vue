<template>
    <div
        :class="[
            'bg-linear-to-r from-[#31575c] to-[#60458c] px-6 py-2 font-semibold flex justify-between gap-2 text-brand-50 sticky transition-all duration-500',
            top_hidden_model ? '-translate-y-40' : 'translate-y-0'
        ]"
    >
        <!-- SECTION LEFT  -->
        <div class="flex gap-2 items-center">
            <a href="https://discord.com/invite/yDaQ4NcCux" target="_blank" class="flex gap-1 items-center hover:bg-brand-950 px-2 rounded transition-all">
                <Icon icon="streamline-pixel:logo-discord" class="size-4" />
                <p class="text-sm">Discord</p>
            </a>

            <a href="https://www.patreon.com/opengameart" target="_blank" class="flex gap-1 items-center hover:bg-brand-950 transition-all px-2 rounded">
                <div class="size-4">
                    <Icon icon="streamline-logos:patreon-logo-block" class="size-4" />
                </div>
                <p class="text-sm">Donate</p>
            </a>
        </div>

        <!-- SECTION: RIGHT -->
        <div v-if="config.loading" class="flex items-center">
            <a href="https://www.patreon.com/opengameart" target="_blank" class="gap-2 items-center flex hover:bg-brand-950 transition-all px-2 rounded">
                <Icon icon="pixel:heart-solid" class="sizer-4" />
                <div class="text-xs dotgothic16-regular w-16 bg-dark-002 h-4 rounded-lg animate-pulse" />
            </a>
        </div>

        <div v-else class="flex items-center">
            <a href="https://www.patreon.com/opengameart" target="_blank" class="gap-2 items-center flex hover:bg-brand-950 transition-all px-2 rounded">
                <Icon icon="pixel:heart-solid" class="sizer-4" />
                <p class="text-xs dotgothic16-regular">{{ navigation_data.donation_monthly_value }}</p>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigationStore'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'

const $navigationStore = useNavigationStore()

const top_hidden_model = defineModel<boolean>()

const { navigation_data, config } = storeToRefs($navigationStore)
</script>

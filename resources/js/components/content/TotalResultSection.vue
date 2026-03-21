<template>
    <div>
        <BasicTransition>
            <div class="flex justify-between gap-2">
                <div v-if="loading" class="h-6 bg-brand-950 w-32 rounded-3xl animate-pulse" />
                <p v-else>{{ total_result > 0 ? `${formatNumber(total_result)} Total Results` : `${total_result} Total Result` }}</p>

                <a :href="search_url" target="_blank" class="flex items-center gap-2 cursor-pointer">
                    <p class="text-md">Search on</p>
                    <p class="bg-brand-950 px-4 rounded-3xl hover:bg-brand-900 transition-colors">OpenGameArt.org</p>
                </a>
            </div>
        </BasicTransition>
    </div>
</template>

<script setup lang="ts">
import BasicTransition from '../transitions/BasicTransition.vue'

import { formatNumber } from '@/utils/utils'

defineProps<{
    total_result: number
    search_url: string
    loading: boolean
}>()
</script>

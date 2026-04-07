<template>
    <div class="flex gap-4 justify-between items-center bg-brand-950 mx-4 rounded-3xl p-4">
        <div class="flex gap-2">
            <AppButton
                :icon="$model == 'Summary' ? 'pixelarticons:text-align-justify' : 'pixelarticons:window-frame'"
                @click="$model = $model == 'Summary' ? 'Full' : 'Summary'"
            >
                {{ $model }}
            </AppButton>
            <AppButton
                :icon="sort == 'Newest' ? 'pixelarticons:arrow-down-wide-narrow' : 'pixelarticons:arrow-up-wide-narrow'"
                @click="sort = sort == 'Newest' ? 'Oldest' : 'Newest'"
            >
                {{ sort }}
            </AppButton>
        </div>

        <AppButton icon="pixelarticons:plus" href="/login?redirect=/collections"> Create </AppButton>
    </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import AppButton from '../form/AppButton.vue'

const $model = defineModel({
    type: String,
    default: 'Summary'
})
const sort = useLocalStorage('collections_sort', 'Newest')
</script>

<style scoped></style>

<template>
    <div class="w-full flex gap-4 items-start justify-between">
        <div class="flex gap-2">
            <img :src="comment.avatar_url" class="rounded-full size-8" />
            <div class="flex flex-col gap-2">
                <div class="text-md flex gap-2 items-center">
                    <b class="font-semibold">{{ comment.username }}</b> -
                    <p class="text-sm text-brand-400">{{ comment.created_at }}</p>
                </div>
                <p>{{ comment.comment }}</p>
            </div>
        </div>

        <Icon icon="pixel:ellipses-vertical" />
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
    comment: {
        username: string
        avatar_url: string
        comment: string
        created_at: string
    }
}>()
</script>

<style scoped></style>

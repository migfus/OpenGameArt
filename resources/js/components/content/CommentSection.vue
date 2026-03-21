<template>
    <div class="w-full flex gap-4 items-start justify-between">
        <div class="flex gap-2">
            <img :src="comment.user?.image_url" class="rounded-full size-8" />
            <div class="flex flex-col gap-2">
                <div class="text-md flex gap-2 items-center">
                    <b class="font-semibold">{{ comment.user?.username }}</b> -
                    <p class="text-sm text-brand-400">{{ messengerStyleTime(comment.created_at) }}</p>
                </div>
                <div v-html="comment.content" />
            </div>
        </div>

        <Icon icon="pixel:ellipses-vertical" class="size-4" />
    </div>
</template>

<script setup lang="ts">
import { ArtComment } from '@/global.interfaces'
import { Icon } from '@iconify/vue'

import { messengerStyleTime } from '@/utils/utils'

defineProps<{
    comment: ArtComment
}>()
</script>

<style scoped></style>

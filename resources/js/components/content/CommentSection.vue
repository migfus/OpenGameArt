<template>
    <div class="w-full flex gap-4 items-start justify-between">
        <div class="flex gap-2">
            <a
                :href="`https://opengameart.org/user/${comment.user?.id}/comments`"
                target="_blank"
                class="size-6 rounded-full shrink-0 hover:bg-brand-950 transition-colors"
            >
                <img :src="comment.user?.image_url" class="w-full h-full object-cover bg-dark-001 rounded-full" />
            </a>

            <div class="flex flex-col gap-0">
                <div class="text-md flex gap-2 items-center">
                    <a
                        :href="`https://opengameart.org/user/${comment.user?.id}/comments`"
                        target="_blank"
                        class="font-semibold hover:bg-brand-950 transition-colors rounded-3xl px-2 -ml-2"
                    >
                        {{ comment.user?.username }}
                    </a>
                    -
                    <p class="text-sm text-brand-400">{{ messengerStyleTime(comment.created_at) }}</p>
                </div>
                <div v-html="comment.content" />
            </div>
        </div>

        <Icon icon="pixel:ellipses-vertical" class="size-4 shrink-0" />
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

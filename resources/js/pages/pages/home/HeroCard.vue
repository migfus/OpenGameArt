<template>
    <BasicTransition>
        <div v-if="posts.length > 0" class="max-w-6xl 2xl:mx-auto p-4">
            <div v-for="item in posts.slice(0, 1)" class="p-6 flex flex-col lg:flex-row gap-4 border border-brand-950 rounded-2xl relative overflow-hidden">
                <div class="lg:w-94 xl:w-120 z-10 object-cover">
                    <img :src="getAnyPossibleImageFromHtml(item.content_html)[0] ?? item.author_image" class="w-full rounded-2xl" />
                </div>

                <a :href="`https://opengameart.org/${item.link}`" class="flex flex-col justify-between gap-2 z-10 w-full">
                    <div class="flex flex-col gap-2">
                        <p class="text-3xl font-bold line-clamp-1">{{ item.title }}</p>
                        <div class="flex gap-2 items-center">
                            <img :src="item.author_image" class="size-10 rounded-full object-fill border border-brand-900" />
                            <div class="flex flex-col">
                                <p class="font-semibold">{{ item.author_name }}</p>
                                <p class="text-sm text-gray-400">{{ dateFormat(item.date) }}</p>
                            </div>
                        </div>
                        <p class="line-clamp-2 lg:line-clamp-2 xl:line-clamp-4" v-html="removeImageInHTML(item.content_html)" />
                    </div>

                    <div class="flex flex-col lg:flex-row justify-end">
                        <AppButton icon="memory:arrow-right-box">Check Full Details</AppButton>
                    </div>
                </a>

                <div class="absolute inset-0 z-0 pointer-events-none">
                    <img
                        :src="getAnyPossibleImageFromHtml(item.content_html)[0] ?? item.author_image"
                        class="h-full w-full object-cover blur-3xl opacity-30 scale-110"
                    />
                </div>
            </div>
        </div>
        <div v-else-if="config.loading" class="max-w-6xl 2xl:mx-auto p-4 animate-pulse">
            <div class="p-6 flex flex-col lg:flex-row gap-4 border border-brand-950 rounded-2xl relative overflow-hidden">
                <div class="lg:w-94 xl:w-120 z-10 object-cover">
                    <div class="w-full rounded-2xl h-64 bg-brand-950" />
                </div>

                <div class="flex flex-col justify-between gap-2 z-10 w-full">
                    <div class="flex flex-col gap-2">
                        <div class="text-3xl font-bold line-clamp-1 h-8 bg-brand-950 rounded-2xl" />
                        <div class="flex gap-2 items-center">
                            <div class="size-10 bg-brand-950 rounded-full object-fill border border-brand-900" />
                            <div class="flex flex-col gap-1">
                                <div class="font-semibold w-64 h-6 bg-brand-950 rounded-2xl" />
                                <div class="text-sm h-4 bg-brand-950 w-24 rounded-2xl" />
                            </div>
                        </div>
                        <div class="h-32 w-full bg-brand-950 rounded-2xl" />
                    </div>

                    <div class="flex flex-col lg:flex-row justify-end">
                        <div class="bg-brand-950 h-8 w-full rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </BasicTransition>
</template>

<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigationStore'
import { storeToRefs } from 'pinia'
import { getAnyPossibleImageFromHtml, removeImageInHTML, dateFormat } from '@/utils/utils'
import AppButton from '@/components/form/AppButton.vue'
import { mergeConfig } from 'axios'
import BasicTransition from '@/components/transitions/BasicTransition.vue'

const $navigationStore = useNavigationStore()
const { posts, config } = storeToRefs($navigationStore)
</script>

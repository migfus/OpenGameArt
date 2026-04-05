<template>
    <div class="flex flex-col gap-4 lg:flex-row sm:p-4 py-4">
        <div class="flex-1 min-w-0 basis-0 flex flex-col gap-4">
            <!-- SECTION: TITLE -->
            <div class="px-4 sm:px-0">
                <h1 v-if="config.loading || !show_data" class="text-2xl font-semibold bg-brand-950 h-8 w-48 rounded-3xl animate-pulse" />
                <h1 v-else class="text-xl">{{ show_data.title }}</h1>
            </div>

            <!-- SECTION: ART PREVIEW -->
            <ArtPreviewCard />

            <!-- SECTION: PREVIEW SELECTION -->
            <div v-if="config.loading || !show_data" class="flex flex-col max-w-full relative">
                <div class="flex gap-2 items-start justify-between">
                    <DataTransition class="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap">
                        <div v-for="item in [0, 1, 2, 3]" class="flex flex-col gap-2">
                            <div class="size-32 rounded-xl bg-brand-950 animate-pulse" />

                            <div class="flex flex-col gap-1">
                                <button class="bg-brand-950 h-5 w-full animate-pulse rounded-xl" />

                                <div class="flex justify-between gap-2">
                                    <button class="bg-brand-950 h-4 w-16 animate-pulse rounded-xl" />
                                    <button class="bg-brand-950 h-4 w-16 animate-pulse rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </DataTransition>

                    <button class="bg-brand-950 h-8 w-16 animate-pulse rounded-xl" />
                </div>
            </div>
            <div v-else class="flex flex-col max-w-full relative px-4 sm:px-0">
                <div class="flex gap-2 items-start justify-between">
                    <DataTransition
                        class="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap"
                        @scroll="updateFilesOverflow"
                        ref="filesScroller"
                    >
                        <FileCard v-for="item in show_data?.files" :file="item" />
                    </DataTransition>
                </div>

                <div
                    v-if="files_options.shadow_left"
                    class="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-dark-001 to-transparent"
                />
                <div
                    v-if="files_options.shadow_right"
                    class="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-dark-001 to-transparent"
                />
            </div>

            <!-- SECTION: USER INFO -->
            <div class="flex gap-2 items-center py-4 justify-between px-4 sm:px-0">
                <div v-if="config.loading || !show_data" class="flex w-full max-w-54 gap-4 items-center shrink-0">
                    <div class="rounded-full size-12 animate-pulse bg-brand-950" />

                    <div class="flex flex-col gap-2">
                        <div class="h-6 w-32 bg-brand-950 animate-pulse rounded-3xl"></div>

                        <div class="h-4 w-24 bg-brand-950 animate-pulse rounded-3xl"></div>
                    </div>
                </div>

                <div v-else class="flex w-full max-w-54 gap-4 items-center shrink-0">
                    <img :src="show_data?.user?.image_url" class="rounded-full size-12 bg-brand-950" />

                    <div class="flex flex-col gap-0">
                        <p class="text-lg font-semibold">{{ show_data.user?.username }}</p>
                        <p class="text-sm text-brand-300">{{ messengerStyleTime(show_data.user?.created_at ?? '') }}</p>
                    </div>
                </div>

                <div v-if="config.loading || !show_data" class="flex flex-1 min-w-0 flex-col items-end gap-2">
                    <div class="h-6 bg-brand-950 animate-pulse rounded-3xl w-32" />
                    <div class="relative max-w-full">
                        <div class="flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
                            <div v-for="item in [0, 1, 2]" class="bg-brand-950 h-5 animate-pulse w-32 rounded-3xl text-sm truncate shrink-0" />
                        </div>
                    </div>
                </div>

                <div v-else class="flex flex-1 min-w-0 flex-col items-end gap-2">
                    <p class="text-sm text-brand-300">{{ messengerStyleTime(show_data.user?.created_at ?? '') }}</p>
                    <div class="relative max-w-full">
                        <div ref="attributesScroller" class="flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap" @scroll="updateAttributesOverflow">
                            <a
                                v-for="item in show_data.licenses"
                                :key="item.id"
                                :href="item.url"
                                class="bg-brand-950 px-4 py-1 rounded-3xl text-sm truncate shrink-0"
                            >
                                {{ item.name }}
                            </a>
                        </div>

                        <div
                            v-if="attributes_options.shadow_left"
                            class="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-dark-001 to-transparent"
                        />
                        <div
                            v-if="attributes_options.shadow_right"
                            class="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-dark-001 to-transparent"
                        />
                    </div>
                </div>
            </div>

            <!-- SECTION: ART Functions -->

            <!-- SECTION: ATTRIBUTES -->

            <!-- DESCRIPTION -->
            <div v-if="config.loading || !show_data" class="flex flex-col gap-2 items-center p-4 bg-brand-950 rounded-3xl h-32 animate-pulse" />
            <div v-else class="flex flex-col gap-2 items-center p-4 bg-brand-950 sm:rounded-3xl">
                <div v-html="show_data.content" :class="[read_more ? '' : 'line-clamp-6', 'w-full']"></div>

                <button class="cursor-pointer" @click="read_more = !read_more">{{ read_more ? 'Read Less' : 'Read More' }}</button>
            </div>

            <!-- SECTION: TAGS -->
            <div v-if="config.loading || !show_data" class="flex flex-col w-full relative">
                <div class="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap">
                    <div
                        v-for="item in [1, 2, 3, 4, 5, 6]"
                        class="bg-brand-950 px-4 py-1 rounded-3xl text-sm flex items-center gap-1 shrink-0 w-32 h-6 animate-pulse"
                    />
                </div>
            </div>
            <div v-else class="flex flex-col w-full relative">
                <div class="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap" ref="tagsScroller" @scroll="updateTagsOverflow">
                    <RouterLink
                        v-for="item in show_data.tags"
                        :key="item.id"
                        :to="`/arts?field_art_tags_tid=${encodeURIComponent(item.name)}`"
                        class="bg-brand-950 px-4 py-1 rounded-3xl text-sm flex items-center gap-1 shrink-0"
                    >
                        {{ item.name }}
                    </RouterLink>
                </div>

                <div v-if="tags_options.shadow_left" class="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-dark-001 to-transparent" />
                <div
                    v-if="tags_options.shadow_right"
                    class="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-dark-001 to-transparent"
                />
            </div>

            <!-- SECTION: FILES TO DOWNLOAD -->

            <!-- SECTION: COMMENTS -->
            <!-- TODO: Combine the 'comment here' and 'comment section' -->
            <div v-if="config.loading || !show_data" class="flex flex-col gap-4 p-4">
                <div v-for="item in [1, 2, 3, 4]" class="flex items-center gap-2">
                    <div class="size-10 bg-brand-950 rounded-full animate-pulse"></div>
                    <div class="flex gap-2 flex-col">
                        <div class="h-6 w-10 bg-brand-950 rounded-full animate-pulse"></div>
                        <div class="h-10 w-32 bg-brand-950 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
            <div v-else class="flex flex-col gap-4 items-center mb-4 px-4 sm:px-0">
                <CommentSection v-for="item in show_data.art_comments" :key="item.id" :comment="item" />

                <div v-if="show_data.art_comments.length <= 0" class="text-sm text-brand-400">Be the first to comment</div>
            </div>
        </div>

        <div class="w-full lg:w-46 lg:shrink-0 2xl:w-110 grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 px-4 sm:px-0">
            <ArtCard v-for="(item, idx) in weekly_arts" :art="item" :idx="idx" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ArtCard from '@/components/cards/ArtCard.vue'
import ArtPreviewCard from '@/components/cards/ArtPreviewCard.vue'
import FileCard from '@/components/cards/FileCard.vue'
import AppInput from '@/components/form/AppInput.vue'
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, useTemplateRef, watch } from 'vue'
import DataTransition from '@/components/transitions/DataTransition.vue'
import CommentSection from '@/components/content/CommentSection.vue'
import AppButton from '@/components/form/AppButton.vue'
import { Icon } from '@iconify/vue'

import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { messengerStyleTime } from '@/utils/utils'
import { useAuthStore } from '@/stores/auth.store'

const $artStore = useArtStore()
const { weekly_arts, show_data, config } = storeToRefs($artStore)
const { showAPI } = $artStore

const $authStore = useAuthStore()
const { auth } = storeToRefs($authStore)

const $route = useRoute()

const getArtIdFromRoute = () => {
    const params = $route.params

    if (!('id' in params)) return null

    return Array.isArray(params.id) ? (params.id[0] ?? null) : params.id
}

const read_more = ref(false)
const comment_here = ref('')

const attributes_scroller = useTemplateRef<HTMLElement | null>('attributesScroller')
const attributes_options = reactive({
    shadow_left: false,
    shadow_right: false
})

const files_scroller = useTemplateRef<HTMLElement | null>('filesScroller')
const files_options = reactive({
    shadow_left: false,
    shadow_right: false
})

const tags_scroller = useTemplateRef<HTMLElement | null>('tagsScroller')
const tags_options = reactive({
    shadow_left: false,
    shadow_right: false
})

const updateAttributesOverflow = () => {
    const el = attributes_scroller.value
    if (!el) return

    const hasOverflow = el.scrollWidth > el.clientWidth + 1

    if (!hasOverflow) {
        attributes_options.shadow_left = false
        attributes_options.shadow_right = false
        return
    }

    attributes_options.shadow_left = el.scrollLeft > 0
    attributes_options.shadow_right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

function updateFilesOverflow() {
    const el = files_scroller.value
    if (!el) return

    const hasOverflow = el.scrollWidth > el.clientWidth + 1

    if (!hasOverflow) {
        files_options.shadow_left = false
        files_options.shadow_right = false
        return
    }

    files_options.shadow_left = el.scrollLeft > 0
    files_options.shadow_right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

function updateTagsOverflow() {
    const el = tags_scroller.value
    if (!el) return

    const hasOverflow = el.scrollWidth > el.clientWidth + 1

    if (!hasOverflow) {
        tags_options.shadow_left = false
        tags_options.shadow_right = false
        return
    }

    tags_options.shadow_left = el.scrollLeft > 0
    tags_options.shadow_right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

const handleResize = () => {
    updateAttributesOverflow()
    updateFilesOverflow()
    updateTagsOverflow()
}

onMounted(async () => {
    await nextTick()
    updateAttributesOverflow()
    updateFilesOverflow()
    updateTagsOverflow()

    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})

watch(
    () => $route.params,
    async () => {
        const artId = getArtIdFromRoute()

        if (artId) {
            window.scrollTo({ top: 0, behavior: 'smooth' })

            await showAPI(artId)

            show_data.value && (document.title = `${show_data.value.title} | OGA (Not Official)`)
        }
    },
    { immediate: true }
)

const attributes = ['CC-BY-SA 4.0', 'CC-BY-ND 4.0', 'CC-BY-NC 4.0', 'CC-BY-NC-SA 4.0', 'CC-BY-NC-ND 4.0']
</script>

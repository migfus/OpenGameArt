<template>
    <div class="flex flex-col gap-4 lg:flex-row p-4">
        <div class="flex-1 min-w-0 basis-0 flex flex-col gap-4">
            <ArtPreviewCard />

            <div class="flex flex-col max-w-full relative">
                <div class="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap" @scroll="updateFilesOverflow" ref="filesScroller">
                    <FileCard v-for="item in files" :file="item" />
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

            <!-- USER INFO -->
            <div class="flex gap-2 items-center py-4 justify-between">
                <div class="flex w-full max-w-54 gap-4 items-center shrink-0">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1773452093235-06429f4c844d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                        class="rounded-full size-16"
                    />

                    <div class="flex flex-col gap-2">
                        <p class="text-lg font-semibold">Username</p>
                        <p>Joined 3 years ago</p>
                    </div>
                </div>

                <div class="flex flex-1 min-w-0 flex-col items-end gap-2">
                    <p class="">March 3 - 12:44</p>
                    <div class="relative max-w-full">
                        <div ref="attributesScroller" class="flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap" @scroll="updateAttributesOverflow">
                            <p v-for="item in attributes" class="bg-brand-950 px-4 py-1 rounded-3xl text-sm truncate shrink-0">{{ item }}</p>
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

            <!-- TAGS -->
            <div class="flex flex-col w-full relative">
                <div class="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap" ref="tagsScroller" @scroll="updateTagsOverflow">
                    <p v-for="item in tags" class="bg-brand-950 px-4 py-1 rounded-3xl text-sm flex items-center gap-1 shrink-0">
                        {{ item }}
                    </p>
                </div>

                <div v-if="tags_options.shadow_left" class="pointer-events-none absolute left-0 top-0 h-full w-6 bg-linear-to-r from-dark-001 to-transparent" />
                <div
                    v-if="tags_options.shadow_right"
                    class="pointer-events-none absolute right-0 top-0 h-full w-6 bg-linear-to-l from-dark-001 to-transparent"
                />
            </div>

            <!-- DESCRIPTION -->
            <div class="flex flex-col gap-2 items-center p-4 bg-brand-950 rounded-3xl">
                <div v-html="desc" :class="{ 'line-clamp-6': !read_more }"></div>

                <button class="cursor-pointer" @click="read_more = !read_more">{{ read_more ? 'Read Less' : 'Read More' }}</button>
            </div>

            <!-- COMMENT HERE -->
            <div class="flex flex-col gap-4 items-center p-4 bg-brand-950 rounded-3xl">
                <div class="w-full flex gap-4 items-start">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1773452093235-06429f4c844d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                        class="rounded-full size-8"
                    />

                    <AppInput name="Comment" v-model="comment_here" noLabel placeholder="Comment Here" class="flex-1" />
                    <AppButton icon="pixel:edit-solid" size="sm">Submit</AppButton>
                </div>

                <div class="w-full flex gap-2 justify-between">
                    <p class="text-sm text-brand-400">12 Comments</p>
                    <p class="text-sm text-brand-400">Sort by Latest</p>
                </div>
            </div>

            <!-- COMMENT HERE -->
            <div class="flex flex-col gap-4 items-center p-4">
                <CommentSection v-for="item in comments" :key="item.username" :comment="item" />
            </div>
        </div>

        <div class="w-full lg:w-64 lg:shrink-0 2xl:w-110 flex flex-col 2xl:grid grid-cols-2 gap-4">
            <ArtCard v-for="(item, idx) in weekly_arts" :art="item" :idx="idx" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ArtCard from '@/components/cards/ArtCard.vue'
import ArtPreviewCard from '@/components/cards/ArtPreviewCard.vue'
import FileCard from '@/components/cards/FileCard.vue'
import AppInput from '@/components/form/AppInput.vue'
import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, reactive } from 'vue'

import CommentSection from '@/components/content/CommentSection.vue'
import AppButton from '@/components/form/AppButton.vue'
import { useArtStore } from '@/stores/art.store'
import { storeToRefs } from 'pinia'

const $artStore = useArtStore()
const { weekly_arts } = storeToRefs($artStore)

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

const attributes = ['Music', 'CC-BY-SA 4.0', 'CC-BY-ND 4.0', 'CC-BY-NC 4.0', 'CC-BY-NC-SA 4.0', 'CC-BY-NC-ND 4.0']
const tags = ['pixel art', 'top-down', 'isometric', 'side view', '3d', '2d']
const desc = `This atmospheric background track is designed for high-stakes cyberpunk environments, deep-space exploration, or futuristic UI transitions. It blends shimmering digital textures with a driving, low-end pulse to create a sense of constant forward motion.

Composition Details
Tempo: 112 BPM

Key: C Minor

Duration: 03:45

Mood: Atmospheric, Suspenseful, Technological

Sonic Profile
The track opens with a granulated synth pad that slowly evolves, mimicking the hum of a massive server room or the cabin pressure of a starship. A rhythmic arpeggio enters at 0:30, utilizing a clean, digital saw wave that cuts through the mix to provide a sense of urgency.

The percussion is minimalist yet impactful, featuring:

Processed Kick: A tight, sub-heavy thump tuned to the root note.

Glitch Percussion: Randomly triggered foley sounds—reminiscent of hydraulic pistons and electrical arcs—to fill the stereo field.

White Noise Swells: Used to bridge transitions between high-tension sequences and ambient lulls.

Suggested Use Cases
"Perfect for scenes involving terminal hacking, nocturnal city fly-overs, or the silent discovery of an ancient alien monolith."

Gaming: Ideal for shop menus, inventory screens, or stealth-based levels.

Content Creation: Background audio for tech reviews or cinematic adventure vlogs.

Creative Coding: A non-distracting loop for long development sessions.`

const comments = [
    {
        username: 'Hello',
        avatar_url:
            'https://images.unsplash.com/photo-1773853431084-eceaebe061c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        comment: 'Hello that wondershit',
        created_at: 'March 3 - 12:44'
    },
    {
        username: 'Hello',
        avatar_url:
            'https://images.unsplash.com/photo-1773853431084-eceaebe061c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        comment: 'Hello that wondershit',
        created_at: 'March 3 - 12:44'
    },
    {
        username: 'Hello',
        avatar_url:
            'https://images.unsplash.com/photo-1773853431084-eceaebe061c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        comment: 'Hello that wondershit',
        created_at: 'March 3 - 12:44'
    },
    {
        username: 'Hello',
        avatar_url:
            'https://images.unsplash.com/photo-1773853431084-eceaebe061c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        comment: 'Hello that wondershit',
        created_at: 'March 3 - 12:44'
    },
    {
        username: 'Hello',
        avatar_url:
            'https://images.unsplash.com/photo-1773853431084-eceaebe061c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        comment: 'Hello that wondershit',
        created_at: 'March 3 - 12:44'
    },
    {
        username: 'Hello',
        avatar_url:
            'https://images.unsplash.com/photo-1773853431084-eceaebe061c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        comment: 'Hello that wondershit',
        created_at: 'March 3 - 12:44'
    }
]

const files = [
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    },
    {
        name: '1233.mp3',
        url: '123123'
    }
]
</script>

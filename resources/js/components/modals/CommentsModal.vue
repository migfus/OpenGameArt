<template>
    <div>
        <!-- NOTE: MOBILE VIEW -->
        <div class="lg:hidden">
            <div color="brand" @click="openModal()" class="w-full mb-4 cursor-pointer bg-brand-950 rounded-3xl p-4">
                <slot name="comment_preview"></slot>
            </div>
        </div>

        <!-- NOTE: DESKTOP VIEW -->
        <div class="hidden lg:flex flex-col gap-4">
            <div class="flex flex-col gap-4 bg-brand-950 rounded-3xl p-4">
                <div>
                    <AppInput v-model="$comment_content" name="Comment" placeholder="Comment Here" noLabel />
                </div>
                <div class="flex gap-2 justify-between">
                    <div>
                        <AppButton @click="$open_modal = false" icon="pixelarticons:text-align-center">By Latest</AppButton>
                    </div>
                    <div class="flex gap-2">
                        <AppButton @click="$open_modal = false" icon="pixelarticons:send" color="brand">Comment</AppButton>
                    </div>
                </div>
            </div>

            <slot name="comments"></slot>
        </div>

        <TransitionRoot as="template" :show="$open_modal">
            <Dialog as="div" class="relative z-10" @close="$open_modal = false">
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-brand-950/25 transition-opacity backdrop-blur-md" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center py-4 text-center">
                        <TransitionChild
                            as="template"
                            enter="ease-out duration-400"
                            enter-from="opacity-0 translate-y-10"
                            enter-to="opacity-100 translate-y-0"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0"
                            leave-to="opacity-0 translate-y-6"
                        >
                            <DialogPanel
                                class="rounded-t-3xl relative transform bg-brand-950 text-brand-100 px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full flex flex-col gap-4 mb-10"
                                :style="panelStyle"
                            >
                                <!-- NOTE: Draggable bar -->
                                <div
                                    class="flex items-center gap-2 justify-center touch-none py-4 -mt-4"
                                    @touchstart="onSwipeStart"
                                    @touchmove.prevent="onSwipeMove"
                                    @touchend="onSwipeEnd"
                                    @touchcancel="onSwipeCancel"
                                >
                                    <div class="border-4 border-t border-dark-001 w-32 rounded-full"></div>
                                </div>

                                <div class="-mt-4 flex flex-col gap-4 max-h-[50%] overflow-y-auto">
                                    <slot name="comments"></slot>
                                </div>

                                <div class="flex flex-col gap-4 mt-4">
                                    <div>
                                        <AppInput v-model="$comment_content" name="Comment" placeholder="Comment Here" noLabel />
                                    </div>
                                    <div class="flex gap-2 justify-between">
                                        <div>
                                            <AppButton @click="$open_modal = false" icon="pixelarticons:text-align-center">By Latest</AppButton>
                                        </div>
                                        <div class="flex gap-2">
                                            <AppButton @click="$open_modal = false" icon="pixelarticons:send" color="brand">Comment</AppButton>
                                            <AppButton @click="$open_modal = false" icon="pixelarticons:close">Close</AppButton>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed, ref, watch } from 'vue'
import AppButton from '../form/AppButton.vue'
import AppInput from '../form/AppInput.vue'

import { useNavigationStore } from '@/stores/navigation.store'
import { storeToRefs } from 'pinia'

const $navigationStore = useNavigationStore()
const { show_mobile_navigation_footer } = storeToRefs($navigationStore)

const $open_modal = defineModel<boolean>()
const $comment_content = defineModel<string>('comment_content')

const SWIPE_CLOSE_THRESHOLD = 110
const SWIPE_MAX_OFFSET = 240
const SWIPE_CLOSE_COMMIT_MS = 150
const SWIPE_CLOSE_CLEANUP_MS = 260

const swipeStartY = ref<number | null>(null)
const swipeOffsetY = ref(0)
const isSwiping = ref(false)
const isSwipeAnimatingBack = ref(false)
const isClosingBySwipe = ref(false)
let swipeResetTimer: ReturnType<typeof setTimeout> | null = null
let swipeCloseCommitTimer: ReturnType<typeof setTimeout> | null = null
let swipeCloseCleanupTimer: ReturnType<typeof setTimeout> | null = null

function openModal() {
    $open_modal.value = true
    show_mobile_navigation_footer.value = true
}

const panelStyle = computed(() => {
    if (!isSwiping.value && !isSwipeAnimatingBack.value && swipeOffsetY.value === 0) {
        return {}
    }

    return {
        transform: `translateY(${swipeOffsetY.value}px)`,
        transition: isSwiping.value ? 'transform 0ms linear' : 'transform 200ms ease-out'
    }
})

function resetSwipe() {
    if (swipeResetTimer) {
        clearTimeout(swipeResetTimer)
        swipeResetTimer = null
    }

    if (swipeCloseCommitTimer) {
        clearTimeout(swipeCloseCommitTimer)
        swipeCloseCommitTimer = null
    }

    if (swipeCloseCleanupTimer) {
        clearTimeout(swipeCloseCleanupTimer)
        swipeCloseCleanupTimer = null
    }

    swipeStartY.value = null
    swipeOffsetY.value = 0
    isSwiping.value = false
    isSwipeAnimatingBack.value = false
    isClosingBySwipe.value = false
}

function onSwipeStart(event: TouchEvent) {
    if (event.touches.length !== 1) return

    swipeStartY.value = event.touches[0].clientY
    isSwiping.value = true
}

function onSwipeMove(event: TouchEvent) {
    if (!isSwiping.value || swipeStartY.value === null || event.touches.length !== 1) return

    const deltaY = event.touches[0].clientY - swipeStartY.value
    swipeOffsetY.value = Math.max(0, Math.min(SWIPE_MAX_OFFSET, deltaY))
}

function onSwipeEnd() {
    if (!isSwiping.value) return

    if (swipeOffsetY.value >= SWIPE_CLOSE_THRESHOLD) {
        isSwiping.value = false
        isSwipeAnimatingBack.value = false
        isClosingBySwipe.value = true

        // Continue the drag direction so it feels like the sheet is dismissed by the swipe.
        swipeOffsetY.value = SWIPE_MAX_OFFSET

        swipeCloseCommitTimer = setTimeout(() => {
            $open_modal.value = false
            swipeCloseCommitTimer = null
        }, SWIPE_CLOSE_COMMIT_MS)

        swipeCloseCleanupTimer = setTimeout(() => {
            resetSwipe()
            swipeCloseCleanupTimer = null
        }, SWIPE_CLOSE_COMMIT_MS + SWIPE_CLOSE_CLEANUP_MS)

        return
    }

    isSwiping.value = false
    isSwipeAnimatingBack.value = true
    swipeOffsetY.value = 0
    swipeResetTimer = setTimeout(() => {
        isSwipeAnimatingBack.value = false
        swipeResetTimer = null
    }, 220)
}

function onSwipeCancel() {
    resetSwipe()
}

watch($open_modal, (isOpen) => {
    if (isOpen) {
        resetSwipe()
        return
    }

    if (!isClosingBySwipe.value) {
        resetSwipe()
    }
})
</script>

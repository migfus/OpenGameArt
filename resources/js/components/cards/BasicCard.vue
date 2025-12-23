<template>
    <BasicTransition>
        <div
            :class="[
                size_,
                color == 'white' ? 'bg-brand-950' : 'bg-brand-950',
                ' p-4 sm:rounded-2xl transition-all object-shadow border-y sm:border border-brand-900'
            ]"
        >
            <!-- NOTE: BASIC CARD HEADER -->
            <div>
                <div class="flex justify-between">
                    <h3 class="text-base font-semibold leading-7 text-light-001 truncate">
                        <Icon v-if="icon" :icon="icon" class="text-sm text-light-001 h-4 w-4 inline mr-3 mb-[3px] align-middle" />
                        <img v-else-if="iconImg" :src="iconImg" class="inline mr-2 w-6 h-6 rounded shadow" />
                        <div v-else class="inline-block h-4 w-4 pt-0.5 text-light-001 mr-2" v-html="iconHtml"></div>
                        <span>{{ title }} </span>
                    </h3>
                </div>
            </div>
            <!-- NOTE: BASIC CARD CONTENTS -->
            <div v-if="!collapse" class="mt-2 transition-all flex flex-col justify-between gap-2">
                <slot></slot>
            </div>
        </div>
    </BasicTransition>
</template>

<script setup lang="ts">
// SECTION: 🧩Shared Components
import BasicTransition from '@/components/transitions/BasicTransition.vue'
import { Icon } from '@iconify/vue'

// SECTION: ⚙️Shared Functions
import { computed, ref } from 'vue'

const $props = defineProps<{
    icon?: string
    iconHtml?: string
    iconImg?: string
    title: string
    // description: string
    size?: 'lg' | 'sm'
    enableSearch?: boolean
    count?: number
    collapse?: boolean
    color?: 'white' | 'brand'
}>()

const collapse = ref($props.collapse ?? false)

const size_ = computed(() => {
    switch ($props.size) {
        case 'sm':
            return 'p-4 sm:w-96 w-full'
        default:
            return 'p-4 sm:min-w-full'
    }
})
</script>

<style scoped>
.loading-card {
    position: relative;
}

@property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.loading-card::after,
.card::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    padding: 4px;
    border-radius: 15px;
    background-image: conic-gradient(from var(--angle), transparent 70%, #00ff99);
    animation: 3s spin linear infinite;
}
.loading-card::before {
    filter: blur(1.5rem);
    opacity: 0.5;
}

@keyframes spin {
    from {
        --angle: 0deg;
    }
    to {
        --angle: 360deg;
    }
}
</style>

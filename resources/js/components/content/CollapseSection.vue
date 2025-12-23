<template>
    <Disclosure as="div" v-slot="{ open }">
        <dt>
            <DisclosureButton
                class="flex w-full items-start justify-between text-left text-white cursor-pointer transition-all hover:bg-brand-950 px-4 py-2 rounded-2xl"
            >
                <span class="text-base font-semibold leading-7">{{ question }}</span>
                <BasicTransition class="ml-6 flex h-7 items-center">
                    <Icon v-if="open || show_all" icon="memory:minus" class="size-6" aria-hidden="true" />
                    <Icon v-else icon="memory:menu-down" class="size-6 flex-none" aria-hidden="true" />
                </BasicTransition>
            </DisclosureButton>
        </dt>
        <BasicTransition>
            <DisclosurePanel as="dd" class="mt-2 bg-brand-950 rounded-2xl py-2 px-4">
                <div class="text-base leading-7 text-gray-300" v-html="answer"></div>
                <div v-if="buttons.length > 0" class="flex gap-2 mt-2 flex-wrap">
                    <AppButton v-for="item in buttons" :title="item.title" external_link :href="item.href" :icon="item.icon">{{ item.title }}</AppButton>
                </div>
            </DisclosurePanel>
        </BasicTransition>
    </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Icon } from '@iconify/vue'
import BasicTransition from '../transitions/BasicTransition.vue'
import AppButton from '../form/AppButton.vue'

defineProps<{
    question: string
    answer: string
    show_all: boolean
    buttons: {
        title: string
        href: string
        icon: string
    }[]
}>()
</script>

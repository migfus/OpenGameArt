<template>
    <div class="flex w-full justify-center relative">
        <div class="mx-auto w-full max-w-sm lg:w-120 mt-16 z-10 bg-dark-001/90 backdrop-blur-sm p-6 py-8 sm:rounded-xl mb-32">
            <div class="flex flex-col gap-2 items-center">
                <div class="rounded-lg bg-brand-950 p-4 border border-brand-900">
                    <img class="size-12 rounded-lg" src="https://oga-ui-test.migfus.site/images/icon.png" alt="OGA" />
                </div>
                <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-brand-100">Log-in your account</h2>
            </div>

            <form @submit.prevent="$authStore.login()">
                <div class="mt-2">
                    <AppInput name="Username/Email" v-model="form.username" />
                </div>

                <div class="mt-2">
                    <AppInput name="Password" type="password" v-model="form.password" />
                </div>

                <div class="flex items-center justify-start my-4">
                    <div class="text-sm leading-6">
                        <RouterLink to="/forgot" class="font-semibold text-brand-200 hover:text-indigo-500">Forgot password?</RouterLink>
                    </div>
                </div>

                <div class="space-y-4">
                    <AppButton class="w-full" color="brand" icon="memory:login" :loading="config.loading">Login</AppButton>
                    <AppButton class="w-full" icon="memory:arrow-right-box" type="button" href="/register">Register</AppButton>
                </div>
            </form>
        </div>

        <div class="absolute h-full overflow-clip">
            <div class="pointer-events-none absolute inset-x-0 top-0 h-16 z-10 bg-linear-to-b from-dark-001/90 to-transparent"></div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-10 bg-linear-to-t from-dark-001/90 to-transparent"></div>

            <BackgroundLogin class="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import AppInput from '@/components/form/AppInput.vue'
import AppButton from '@/components/form/AppButton.vue'
import BackgroundLogin from './BackgroundLogin.vue'

import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

const $authStore = useAuthStore()
const { form, config } = storeToRefs($authStore)

onMounted(() => {
    $authStore.getArtPreviews()
})
</script>

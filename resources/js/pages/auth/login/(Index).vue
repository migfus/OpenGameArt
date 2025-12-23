<template>
    <div class="flex min-h-full flex-1">
        <div class="flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-120">
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
                        <AppButton class="w-full" color="brand" icon="memory:login">Login</AppButton>
                        <AppButton class="w-full" icon="memory:arrow-right-box" type="button" href="/register">Register</AppButton>
                    </div>
                </form>
            </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block">
            <BackgroundLogin />
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
const { form } = storeToRefs($authStore)

onMounted(() => {
    $authStore.getArtPreviews()
})
</script>

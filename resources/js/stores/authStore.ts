import { ArtPreview, Auth } from '@/globalInterfaces'
import api from '@/utils/axios'
import { localStorageSerializer } from '@/utils/utils'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import router from '@/router'
import { notify } from 'notiwind'

export const useAuthStore = defineStore('authStore', () => {
    const art_previews = ref<ArtPreview[]>([])
    const auth = useLocalStorage<Auth>('auth', null, localStorageSerializer())
    const token = useLocalStorage<string>('token', '')
    const form = reactive({
        username: import.meta.env.VITE_OGA_USER_EMAIL,
        password: import.meta.env.VITE_OGA_USER_PASS
    })
    const config = reactive({
        loading: false
    })
    const friends = useLocalStorage<Auth[]>('friends', [], localStorageSerializer())

    async function getArtPreviews() {
        const { data } = await api.get('/art-previews')
        art_previews.value = data
    }

    async function login() {
        config.loading = true
        const { data } = await api.post('/login', form)
        if (data) {
            auth.value = data.auth
            token.value = data.token

            router.push({ name: 'home' })
            notify({
                group: 'success',
                title: 'Log-in',
                content: 'Welcome back!'
            })
            getFriends()
        } else {
            auth.value = null
            token.value = null
        }
        config.loading = false
    }

    async function logout() {
        config.loading = true
        const { data } = await api.post('/logout', { token: token.value })
        if (data) {
            auth.value = null
            token.value = null
            router.push({ name: 'login' })
            notify({
                group: 'success',
                title: 'Log-out',
                content: 'See you!'
            })
            friends.value = []
        }
        config.loading = false
    }

    async function getFriends() {
        const { data } = await api.get('/friends')
        friends.value = data
    }

    return {
        art_previews,
        auth,
        form,
        config,
        token,
        friends,

        getArtPreviews,
        login,
        logout
    }
})

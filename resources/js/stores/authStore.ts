import { ArtPreview, Auth } from '@/globalInterfaces'
import api from '@/utils/axios'
import { localStorageSerializer } from '@/utils/utils'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
    const art_previews = ref<ArtPreview[]>([])
    const auth = useLocalStorage<Auth>('auth', null, localStorageSerializer())
    const token = useLocalStorage<string>('token', '')
    const form = reactive({
        username: import.meta.env.VITE_OGA_USER_EMAIL,
        password: import.meta.env.VITE_OGA_USER_PASS
    })

    async function getArtPreviews() {
        const { data } = await api.get('/art-previews')
        art_previews.value = data
    }

    async function login() {
        const { data } = await api.post('/login', form)
        auth.value = data.auth
        token.value = data.token
    }

    return {
        art_previews,
        auth,
        form,

        getArtPreviews,
        login
    }
})

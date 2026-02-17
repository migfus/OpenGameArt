import { Post, StoreConfig } from '@/globalInterfaces'
import api from '@/utils/axios'
import moment from 'moment'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const ttl = 24 // 24hrs

export const usePostStore = defineStore('PostStore', () => {
    const posts = ref<Post[]>([])
    const recent_posts = ref<Post[]>([])

    const config = reactive<StoreConfig>({
        loading: false
    })

    async function checkPostForRefresh() {
        const posts_that_needs_refresh = posts.value.filter((item: Post) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            posts_that_needs_refresh.map(async (item: Post) => {
                const data = await refreshPost(item.id)
                if (data) {
                    const index = posts.value.findIndex((art: Post) => art.id === data.id)
                    if (index !== -1) {
                        posts.value[index] = data
                    }
                }
            })
        )

        const recent_posts_that_needs_refresh = recent_posts.value.filter((item: Post) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            recent_posts_that_needs_refresh.map(async (item: Post) => {
                const data = await refreshPost(item.id)
                if (data) {
                    const index = recent_posts.value.findIndex((art: Post) => art.id === data.id)
                    if (index !== -1) {
                        recent_posts.value[index] = data
                    }
                }
            })
        )
    }

    async function refreshPost(id: string): Promise<Post | undefined> {
        try {
            const { data } = await api.put<Post>(`/posts/${id}`, { method: 'refresh' })
            return data
        } catch (err) {
            console.log('error on PostStore/refreshPost()')
        }
    }

    return {
        posts,
        recent_posts,
        config,

        checkPostForRefresh
    }
})

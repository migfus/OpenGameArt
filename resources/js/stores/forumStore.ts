import { Art, Forum, StoreConfig } from '@/globalInterfaces'
import api from '@/utils/axios'
import moment from 'moment'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { t } from 'vue-router/dist/index-Cu9B0wDz.mjs'

const ttl = 24 // 24hrs

export const useForumStore = defineStore('ForumStore', () => {
    const forums = ref<Forum[]>([])
    const recent_forums = ref<Forum[]>([])

    const config = reactive<StoreConfig>({
        loading: false
    })

    async function checkForumForRefresh() {
        const forums_that_needs_refresh = recent_forums.value.filter((item: Forum) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            forums_that_needs_refresh.map(async (item: Forum) => {
                const data = await refreshForum(item.id)
                if (data) {
                    const index = forums.value.findIndex((f: Forum) => f.id === data.id)
                    if (index !== -1) {
                        forums.value[index] = data
                    }
                }
            })
        )

        const recent_forums_that_needs_refresh = recent_forums.value.filter((item: Forum) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            recent_forums_that_needs_refresh.map(async (item: Forum) => {
                const data = await refreshForum(item.id)
                if (data) {
                    const index = recent_forums.value.findIndex((art: Forum) => art.id === data.id)
                    if (index !== -1) {
                        recent_forums.value[index] = data
                    }
                }
            })
        )
    }

    async function refreshForum(id: string): Promise<Forum | undefined> {
        try {
            const { data } = await api.put<Forum>(`/forums/${id}`, { method: 'refresh' })
            return data
        } catch (err) {
            console.log('error on ForumStore/refreshForum()')
        }
    }

    return {
        forums,
        recent_forums,
        config,

        checkForumForRefresh
    }
})

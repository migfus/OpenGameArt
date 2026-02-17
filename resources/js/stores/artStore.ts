import { Art, StoreConfig } from '@/globalInterfaces'
import api from '@/utils/axios'
import moment from 'moment'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useArtStore = defineStore('ArtStore', () => {
    const arts = ref<Art[]>([])
    const weekly_arts = ref<Art[]>([])

    const config = reactive<StoreConfig>({
        loading: false
    })

    async function checkArtsForRefresh() {
        const weekly_arts_that_needs_refresh = weekly_arts.value.filter((item: Art) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= 24 ? true : false
        )

        console.log('weekly_arts needs an update: ', weekly_arts_that_needs_refresh)
        console.log('weekly_arts', weekly_arts.value)

        await Promise.all(
            weekly_arts_that_needs_refresh.map(async (item: Art) => {
                const data = await refreshArt(item.id)
                if (data) {
                    const index = weekly_arts.value.findIndex((art: Art) => art.id === data.id)
                    if (index !== -1) {
                        weekly_arts.value[index] = data
                    }
                }
            })
        )

        const arts_that_needs_refresh = arts.value.filter((item: Art) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= 24 ? true : false
        )

        await Promise.all(
            arts_that_needs_refresh.map(async (item: Art) => {
                const data = await refreshArt(item.id)
                if (data) {
                    const index = arts.value.findIndex((art: Art) => art.id === data.id)
                    if (index !== -1) {
                        arts.value[index] = data
                    }
                }
            })
        )
    }

    async function refreshArt(id: string): Promise<Art | undefined> {
        try {
            const { data } = await api.put<Art>(`/arts/${id}`, { method: 'refresh' })
            return data
        } catch (err) {
            console.log('error on ArtStore/refreshArt()')
        }
    }

    return {
        arts,
        weekly_arts,
        config,

        checkArtsForRefresh
    }
})

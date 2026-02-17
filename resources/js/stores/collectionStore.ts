import { Collection, StoreConfig } from '@/globalInterfaces'
import api from '@/utils/axios'
import moment from 'moment'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const ttl = 24 // 24hrs

export const useCollectionStore = defineStore('CollectionStore', () => {
    const collections = ref<Collection[]>([])
    const new_collections = ref<Collection[]>([])

    const config = reactive<StoreConfig>({
        loading: false
    })

    async function checkCollectionForRefresh() {
        const collections_that_needs_refresh = collections.value.filter((item: Collection) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            collections_that_needs_refresh.map(async (item: Collection) => {
                const data = await refreshCollection(item.id)
                if (data) {
                    const index = collections.value.findIndex((f: Collection) => f.id === data.id)
                    if (index !== -1) {
                        collections.value[index] = data
                    }
                }
            })
        )

        const new_collections_that_needs_refresh = new_collections.value.filter((item: Collection) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            new_collections_that_needs_refresh.map(async (item: Collection) => {
                const data = await refreshCollection(item.id)
                if (data) {
                    const index = new_collections.value.findIndex((art: Collection) => art.id === data.id)
                    if (index !== -1) {
                        new_collections.value[index] = data
                    }
                }
            })
        )
    }

    async function refreshCollection(id: string): Promise<Collection | undefined> {
        try {
            const { data } = await api.put<Collection>(`/collections/${id}`, { method: 'refresh' })
            return data
        } catch (err) {
            console.log('error on CollectionStore/refreshCollection()')
        }
    }

    return {
        collections,
        new_collections,
        config,

        checkCollectionForRefresh
    }
})

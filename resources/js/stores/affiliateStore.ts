import { Affiliate, StoreConfig } from '@/globalInterfaces'
import api from '@/utils/axios'
import moment from 'moment'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const ttl = 24 // 24hrs

export const useAffiliateStore = defineStore('AffiliateStore', () => {
    const affiliates = ref<Affiliate[]>([])

    const config = reactive<StoreConfig>({
        loading: false
    })

    async function checkAffiliatesForRefresh() {
        const affiliates_that_needs_refresh = affiliates.value.filter((item: Affiliate) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            affiliates_that_needs_refresh.map(async (item: Affiliate) => {
                const data = await refreshAffiliate(item.id, item.title)
                if (data) {
                    const index = affiliates.value.findIndex((art: Affiliate) => art.id === data.id)
                    if (index !== -1) {
                        affiliates.value[index] = data
                    }
                }
            })
        )
    }

    async function refreshAffiliate(id: string, title: string): Promise<Affiliate | undefined> {
        try {
            const { data } = await api.put<Affiliate>(`/affiliates/uwu`, { method: 'refresh', title, id })
            return data
        } catch (err) {
            console.log('error on ArtStore/refreshArt()')
        }
    }

    return {
        affiliates,
        config,

        checkAffiliatesForRefresh
    }
})

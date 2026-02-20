import { Art, StoreConfig, SearchFilters } from '@/globalInterfaces'
import api from '@/utils/axios'
import axios from 'axios'
import moment from 'moment'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const ttl = 24 // 24hrs

export const useArtStore = defineStore('ArtStore', () => {
    const $router = useRouter()
    const cancelSource = ref(axios.CancelToken.source())
    const arts = ref<Art[]>([])
    const new_arts = ref<Art[]>([])
    const weekly_arts = ref<Art[]>([])
    const search_filters = reactive<SearchFilters>({
        search: ''
    })
    const total_result = ref<number>(0)

    const config = reactive<StoreConfig>({
        loading: false,
        lazy_page: 1,
        lazy_loading: false
    })

    async function checkExploreArtsForRefresh() {
        // SECTION: EXPLORE
        const arts_that_needs_refresh = arts.value.filter((item: Art) => {
            console.log('name', item.title, 'updated_at', Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl)
            return item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        })

        for (const item of arts_that_needs_refresh) {
            const data = await refreshArt(item.id)
            if (data) {
                const index = arts.value.findIndex((art: Art) => art.id === data.id)
                if (index !== -1) {
                    arts.value[index] = data
                }
            }
        }
    }

    async function checkWeeklyArtsForRefresh() {
        // SECTION: WEEKLY
        const weekly_arts_that_needs_refresh = weekly_arts.value.filter((item: Art) => {
            console.log(item.id)
            console.log(Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)))
            return item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        })

        // return null

        // alert(JSON.stringify(weekly_arts_that_needs_refresh))

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
    }

    async function checkNewArtsForRefresh() {
        // SECTION: NEW
        const new_arts_that_needs_refresh = new_arts.value.filter((item: Art) =>
            item.updated_at == undefined ? true : Math.abs(moment(item.updated_at).diff(moment(), 'hours', true)) >= ttl ? true : false
        )

        await Promise.all(
            new_arts_that_needs_refresh.map(async (item: Art) => {
                const data = await refreshArt(item.id)
                if (data) {
                    const index = new_arts.value.findIndex((art: Art) => art.id === data.id)
                    if (index !== -1) {
                        new_arts.value[index] = data
                    }
                }
            })
        )
    }

    async function refreshArt(id: string): Promise<Art | undefined> {
        try {
            const { data } = await api.put<Art>(`/arts/${id}`, { method: 'refresh' }, { cancelToken: cancelSource.value.token })
            return data
        } catch (err) {
            console.log('error on ArtStore/refreshArt()')
        }
    }

    async function getArts() {
        config.loading = true
        try {
            $router.replace({ query: { search: search_filters.search } })
            const { data } = await api.get(`/arts?search=${search_filters.search}&page=1`)
            arts.value = data.data
            total_result.value = data.total_result
            config.lazy_page = 1
        } catch (err) {
            console.log('erro on ArtStore/getArts()', err)
        }
        config.loading = false
    }

    async function lazyGetArts() {
        config.lazy_loading = true
        try {
            const { data } = await api.get(`/arts?search=${search_filters.search}&page=${config.lazy_page}`)

            arts.value.push(...data.data)
        } catch (err) {
            console.log('erro on ArtStore/lazyGetArts()', err)
        }
        config.lazy_loading = false
    }

    function cancelAllRequests(msg = 'Requests Cancelled') {
        cancelSource.value.cancel(msg)
        cancelSource.value = axios.CancelToken.source()
    }

    return {
        cancelSource,
        arts,
        new_arts,
        weekly_arts,
        config,
        search_filters,
        total_result,

        checkWeeklyArtsForRefresh,
        checkNewArtsForRefresh,
        checkExploreArtsForRefresh,
        getArts,
        cancelAllRequests,
        lazyGetArts
    }
})

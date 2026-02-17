import { Affiliate, Art, RecentCollection, RecentForum, StoreConfig, Post } from '@/globalInterfaces'
import api from '@/utils/axios'
import moment from 'moment'
import { notify } from 'notiwind'
import { defineStore, storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { useArtStore } from './artStore'

export const useNavigationStore = defineStore('navigationStore', () => {
    const $artStore = useArtStore()
    const { arts, weekly_arts } = storeToRefs($artStore)
    const { checkArtsForRefresh } = $artStore
    // STATE
    const recent_collections = ref<RecentCollection[]>([])
    const recent_forum = ref<RecentForum[]>([])
    const affiliates = ref<Affiliate[]>([])
    const latest_banner_title = ref<string>('')
    const posts = ref<Post[]>([])
    const donation_monthly_value = ref<string>('')

    const config = reactive<StoreConfig>({
        loading: false
    })

    async function getData() {
        try {
            config.loading = true
            const { data } = await api.get<{
                recent_collections: RecentCollection[]
                recent_forum: RecentForum[]
                affiliates: Affiliate[]
                latest_banner_title: string
                weekly_arts: Art[]
                new_arts: Art[]
                posts: Post[]
                donation_monthly_value: string
            }>('')

            recent_collections.value = data.recent_collections
            recent_forum.value = data.recent_forum
            affiliates.value = data.affiliates
            latest_banner_title.value = data.latest_banner_title
            weekly_arts.value = data.weekly_arts
            arts.value = data.new_arts
            posts.value = data.posts
            donation_monthly_value.value = data.donation_monthly_value

            config.loading = false

            checkRecentCollection()
            checkRecentForums()
            checkAffiliates()

            checkArtsForRefresh()
        } catch (err) {
            notify({
                group: 'error',
                title: 'Network Error',
                content: 'API error'
            })
        }
    }

    function checkRecentForums() {
        const recent_forums_needs_an_update = recent_forum.value.filter((item: RecentForum) => checkItem(item.updated_at))

        // Checks if there's a null users, skip if none
        if (recent_forums_needs_an_update.length > 0) {
            createNewForum(recent_forums_needs_an_update[0].id)
        }
    }

    async function createNewForum(id: string) {
        const { data } = await api.post(`recent-forum`, { id })

        const index = recent_forum.value.findIndex((item) => item.id === data.id)

        if (index !== -1) {
            // Replace the entire item
            recent_forum.value.splice(index, 1, data)

            checkRecentForums()
        }
    }

    function checkRecentCollection() {
        const recent_collections_needs_an_update = recent_collections.value.filter((item: RecentCollection) => checkItem(item.updated_at))

        // Checks if there's a null users, skip if none
        if (recent_collections_needs_an_update.length > 0) {
            createRecentCollection(recent_collections_needs_an_update[0].id)
        }
    }

    async function createRecentCollection(id: string) {
        const { data } = await api.post(`/collection`, { id })

        const index = recent_collections.value.findIndex((item) => item.id === data.id)

        if (index !== -1) {
            // Replace the entire item
            recent_collections.value.splice(index, 1, data)

            checkRecentCollection()
        }
    }

    function checkAffiliates() {
        // Checks if there's a null image_url, skip if none
        const affiliates_that_needs_updates = affiliates.value.filter((item: Affiliate) => checkItem(item.updated_at))

        if (affiliates_that_needs_updates.length > 0) {
            updateAffiliate(affiliates_that_needs_updates[0].id, affiliates_that_needs_updates[0].title)
        }
    }

    async function updateAffiliate(id: string, title: string) {
        const { data } = await api.post(`/affiliate`, { id, title })

        const index = affiliates.value.findIndex((item) => item.id === data.id)

        if (index !== -1) {
            // Replace the entire item
            affiliates.value.splice(index, 1, data)

            checkAffiliates()
        }
    }

    function checkItem(item_date: string) {
        if (item_date == undefined) {
            return true
        }

        // Math.abs handles cases regardless of which date is "newer"
        const hourDifference = Math.abs(moment(item_date).diff(moment(), 'hours', true))

        return hourDifference >= 24
    }

    return {
        recent_collections,
        recent_forum,
        affiliates,
        latest_banner_title,
        posts,
        donation_monthly_value,

        config,

        getData
    }
})

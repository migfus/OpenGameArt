import { Affiliate, Art, Forum, StoreConfig, Post, Collection } from '@/globalInterfaces'
import api from '@/utils/axios'
import moment from 'moment'
import { notify } from 'notiwind'
import { defineStore, storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { useArtStore } from './artStore'
import { useForumStore } from './forumStore'
import { useCollectionStore } from './collectionStore'

export const useNavigationStore = defineStore('navigationStore', () => {
    const $artStore = useArtStore()
    const { arts, weekly_arts } = storeToRefs($artStore)
    const { checkArtsForRefresh } = $artStore

    const $forumStore = useForumStore()
    const { recent_forums } = storeToRefs($forumStore)
    const { checkForumForRefresh } = $forumStore

    const $collectionStore = useCollectionStore()
    const { new_collections } = storeToRefs($collectionStore)
    const { checkCollectionForRefresh } = $collectionStore

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
                recent_collections: Collection[]
                recent_forum: Forum[]
                affiliates: Affiliate[]
                latest_banner_title: string
                weekly_arts: Art[]
                new_arts: Art[]
                posts: Post[]
                donation_monthly_value: string
            }>('')

            new_collections.value = data.recent_collections

            recent_forums.value = data.recent_forum
            affiliates.value = data.affiliates
            latest_banner_title.value = data.latest_banner_title
            weekly_arts.value = data.weekly_arts
            arts.value = data.new_arts
            posts.value = data.posts
            donation_monthly_value.value = data.donation_monthly_value

            config.loading = false

            checkAffiliates()

            checkArtsForRefresh()
            checkForumForRefresh()
            checkCollectionForRefresh()
        } catch (err) {
            notify({
                group: 'error',
                title: 'Network Error',
                content: 'API error'
            })
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
        affiliates,
        latest_banner_title,
        posts,
        donation_monthly_value,

        config,

        getData
    }
})

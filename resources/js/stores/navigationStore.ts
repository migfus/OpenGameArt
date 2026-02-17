import { Affiliate, Art, Collection, Forum, Post, StoreConfig } from '@/globalInterfaces'
import api from '@/utils/axios'
import { notify } from 'notiwind'
import { defineStore, storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import { useAffiliateStore } from './affiliateStore'
import { useArtStore } from './artStore'
import { useCollectionStore } from './collectionStore'
import { useForumStore } from './forumStore'
import { usePostStore } from './postStore'

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

    const $affilateStore = useAffiliateStore()
    const { affiliates } = storeToRefs($affilateStore)
    const { checkAffiliatesForRefresh } = $affilateStore

    const $postStore = usePostStore()
    const { recent_posts } = storeToRefs($postStore)
    const { checkPostForRefresh } = $postStore

    const navigation_data = reactive<{
        latest_banner_title: string
        donation_monthly_value: string
    }>({
        latest_banner_title: '',
        donation_monthly_value: ''
    })

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
            weekly_arts.value = data.weekly_arts
            arts.value = data.new_arts
            recent_posts.value = data.posts

            Object.assign(navigation_data, {
                latest_banner_title: data.latest_banner_title,
                donation_monthly_value: data.donation_monthly_value
            })

            config.loading = false

            checkArtsForRefresh()
            checkForumForRefresh()
            checkCollectionForRefresh()
            checkAffiliatesForRefresh()
            // checkPostForRefresh() // direct from navigationStore
        } catch (err) {
            notify({
                group: 'error',
                title: 'Network Error',
                content: 'API error'
            })
        }
    }

    return {
        navigation_data,

        config,

        getData
    }
})

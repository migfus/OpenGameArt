import { useStorage } from '@vueuse/core'
import { notify } from 'notiwind'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const ttl = 24 // 24hrs

interface SearchHistory {
    content: string
    created_at: string
}

export const useSearchStore = defineStore('SearchStore', () => {
    const $router = useRouter()

    const search_filters = ref<{
        search: string
    }>({
        search: ''
    })
    const search_history = useStorage<SearchHistory[]>('search_history', [], localStorage, {
        serializer: {
            read: (v: string) => (v ? JSON.parse(v) : null),
            write: (v: SearchHistory[]) => JSON.stringify(v)
        }
    })

    function submit_search() {
        const search_term = search_filters.value.search.trim()
        if (search_term) {
            if (!search_history.value.some((item) => item.content === search_term)) {
                search_history.value.push({ content: search_term, created_at: new Date().toISOString() })
                if (search_history.value.length > 6) {
                    search_history.value.shift()
                }
            }
            $router.push({ path: '/arts', query: search_filters.value })
        }
    }

    function removeFromHistory(created_at: string) {
        search_history.value = search_history.value.filter((item) => item.created_at !== created_at)

        notify({
            group: 'success',
            title: `Removed from history`,
            content: 'The search term has been removed from your history'
        })
    }

    return {
        search_filters,
        search_history,

        submit_search,
        removeFromHistory
    }
})

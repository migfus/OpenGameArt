<template>
    <form @submit.prevent="search()" class="bg-brand-950 border border-brand-900 m-6 p-6 rounded-2xl flex flex-col items-center gap-2">
        <div class="max-w-full w-md relative">
            <AppInput name="Search" v-model="search_filters.search" :placeholder="query.selected_filter.placeholder" />
            <AppButton class="absolute right-0 top-6" size="sm" icon="pixelarticons:search" :loading="config.loading" color="brand">Search</AppButton>
        </div>

        <div class="flex gap-2">
            <AppButton
                size="sm"
                :color="filters.advance_filters ? undefined : 'brand'"
                @click="filters.advance_filters = false"
                type="button"
                icon="pixelarticons:search"
            >
                Simple Search
            </AppButton>
            <AppButton
                size="sm"
                :color="filters.advance_filters ? 'brand' : undefined"
                @click="filters.advance_filters = true"
                type="button"
                icon="pixelarticons:text-search"
            >
                Advance Search
            </AppButton>
        </div>

        <div v-if="filters.advance_filters" class="flex flex-col gap-2 items-center">
            <div class="flex gap-2 flex-wrap">
                <AppButton
                    v-for="item in search_filter"
                    :icon="item.icon"
                    :color="query.selected_filter.name == item.name ? 'brand' : undefined"
                    @click="changeSearchFilter(item)"
                >
                    {{ item.name }}
                </AppButton>
            </div>

            <div v-if="add_filters.licenses" class="flex gap-4 flex-wrap bg-dark-001 p-2 px-4 rounded-xl">
                <AppCheckbox v-for="item in licenses" :name="item.name" v-model="item.checked" />
            </div>
            <div v-if="add_filters.assets_type" class="flex gap-4 flex-wrap bg-dark-001 p-2 px-4 rounded-xl">
                <AppCheckbox v-for="item in assets_types" :name="item.name" v-model="item.checked" />
            </div>

            <div class="flex gap-2 flex-wrap">
                <AppButton :icon="add_filters.licenses ? 'memory:alpha-x' : 'memory:alpha-c'" @click="add_filters.licenses = !add_filters.licenses">
                    {{ `${add_filters.licenses ? 'All Licenses' : 'Filter Licenses'}` }}
                </AppButton>
                <AppButton
                    :icon="add_filters.assets_type ? 'memory:alpha-x' : 'memory:wall-front-damaged'"
                    @click="add_filters.assets_type = !add_filters.assets_type"
                >
                    {{ `${add_filters.assets_type ? 'All Assets Types' : 'Filter Assets Type'}` }}
                </AppButton>
            </div>

            <div class="flex gap-2">
                <AppButton icon="memory:rotate-clockwise" @click="resetQuery()">Reset</AppButton>
                <AppButton :icon="query.sort_by.icon" @click="query.sort_by = query.sort_by.name === 'Recent' ? sort_by[1] : sort_by[0]">
                    {{ query.sort_by.name }}
                </AppButton>
                <AppButton icon="memory:search">Search</AppButton>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import AppButton from '@/components/form/AppButton.vue'
import AppCheckbox from '@/components/form/AppCheckbox.vue'
import AppInput from '@/components/form/AppInput.vue'

import { useArtStore } from '@/stores/artStore'
import { storeToRefs } from 'pinia'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const $artStore = useArtStore()
const { search_filters, config } = storeToRefs($artStore)
const { getArts, checkExploreArtsForRefresh, cancelAllRequests } = $artStore
const $route = useRoute()

interface SearchFilter {
    name: string
    icon: string
    placeholder: string
}

interface SortBy {
    name: string
    icon: string
}

const filters = reactive({
    advance_filters: true
})

const licenses = [
    {
        name: 'CC-BY 3.0',
        checked: true
    },
    {
        name: 'OGA-BY 4.0',
        checked: true
    },
    {
        name: 'OGA-BY 4.0',
        checked: true
    },
    {
        name: 'CC-BY 4.0',
        checked: true
    },
    {
        name: 'GPL 3.0',
        checked: true
    },
    {
        name: 'GPL 2.0',
        checked: true
    },
    {
        name: 'CC0',
        checked: true
    },
    {
        name: 'CC-BY-SA 4.0',
        checked: true
    },
    {
        name: 'CC-BY-SA 3.0',
        checked: true
    }
]

const assets_types = [
    {
        name: '2D Art',
        checked: true
    },
    {
        name: '3D Art',
        checked: true
    },
    {
        name: 'Concept Art',
        checked: true
    },
    {
        name: 'Texture',
        checked: true
    },
    {
        name: 'Music',
        checked: true
    },
    {
        name: 'Sound Effect',
        checked: true
    },
    {
        name: 'Document',
        checked: true
    }
]

const add_filters = reactive({
    licenses: false,
    assets_type: false
})

const sort_by = [
    {
        name: 'Recent',
        icon: 'memory:format-text-single-line'
    },
    {
        name: 'Oldest',
        icon: 'memory:format-text-multiline'
    }
]

const search_filter: SearchFilter[] = [
    {
        name: 'General',
        icon: 'memory:card-text',
        placeholder: 'General: Arts....'
    },
    {
        name: 'Tags',
        icon: 'memory:pound',
        placeholder: 'Tags: Art, Music, BFX'
    },
    {
        name: 'User',
        icon: 'memory:account',
        placeholder: 'Users: Madman'
    }
]

const query = reactive<{
    search: string
    sort_by: SortBy
    selected_filter: SearchFilter
    licenses: any[]
}>(initQuery())

function initQuery() {
    return { search: '', sort_by: sort_by[0], selected_filter: search_filter[0], licenses: [] }
}

function resetQuery() {
    Object.assign(query, initQuery())
}

function changeSearchFilter(new_filter: SearchFilter) {
    query.selected_filter = new_filter
    query.search = ''
}

async function search() {
    cancelAllRequests()
    await getArts()
    checkExploreArtsForRefresh()
}

onMounted(() => {
    search_filters.value.search = $route.query.search as string
    search()
})
</script>

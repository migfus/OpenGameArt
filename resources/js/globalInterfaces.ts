export interface User {
    id: number
    url_username: string
    username: string
    image_url: string
    created_at: string
}

export interface Post {
    title: string
    link: string
    author_name: string
    author_linkg: string
    date: string
    content_html: string
    comment_link: string
    author_image: string
}

// SECTION: FROM API
export interface RecentCollection {
    id: string
    title: string
    user?: User
    created_at: string
}

export interface RecentForum {
    id: string
    title: string
    content?: string
    created_at?: string
    user?: User
}

export interface StoreConfig {
    loading: boolean
}

export interface Affiliate {
    id: string // url
    title: string
    image_url?: string
    created_at?: string
}

export interface Art {
    id: string
    title: string
    favorites_count: number
    content?: string
    art_previews: ArtPreview[]
    audio_ogg?: string
    audio_mp3?: string

    user?: User
    art_category: ArtCategory // database & temporary [Art, Music]
    files: File[]
    art_comments: ArtComment[]
    tags: Tag[]
}

export interface Collection {
    id: string
    title: string
    string: string

    user?: User
    arts?: Art[]
}

export interface ArtCategory {
    id: number
    name: string
}

export interface ArtPreview {
    id: number
    url: string

    art_preview_category: ArtPreviewCategory
}

export interface ArtPreviewCategory {
    name: 'image' | 'audio'
}

export interface File {
    id: number
    file_url: string
    name: string
    download_count: number
}

export interface ArtComment {
    id: number
    content: string
    created_at: string

    user: User
    art: Art
}

export interface Auth extends User {}

export interface Tag {
    id: number
    name: string
}

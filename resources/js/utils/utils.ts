import moment from 'moment'

export function clearDelays(e: Event) {
    const el = e.currentTarget as HTMLElement | null
    if (!el) return
    el.style.animationDelay = '0ms'
    el.style.transitionDelay = '0ms'
    // mark it so any future logic can detect delay was removed
    el.dataset.delayRemoved = 'true'
}

export const animation_delay = 100

export function timeAgo(time_ago: string) {
    // Parse manually into numbers
    const days_match = time_ago.match(/(\d+)\s*days?/)
    const hours_match = time_ago.match(/(\d+)\s*hours?/)
    const minutes_match = time_ago.match(/(\d+)\s*mins?|(\d+)\s*min/)
    const seconds_match = time_ago.match(/(\d+)\s*seconds?|\s*(\d+)\s*secs?/)

    // Convert to numbers
    const days = days_match ? parseInt(days_match[1]) : 0
    const hours = hours_match ? parseInt(hours_match[1]) : 0
    const minutes = minutes_match ? parseInt(minutes_match[1] || minutes_match[2]) : 0
    const seconds = seconds_match ? parseInt(seconds_match[1] || seconds_match[2]) : 0

    // Create a duration including days and seconds
    const duration = moment.duration({ days, hours, minutes, seconds })

    // Calculate the past date by subtracting the duration from now
    const pastDate = moment().subtract(duration)

    return messengerStyleTime(pastDate.toISOString())
}

export function messengerStyleTime(timestamp: string) {
    const now = moment()
    const date = moment(timestamp)

    if (now.isSame(date, 'day')) {
        // Today: show time like 3:15 PM
        return date.format('h:mm A')
    } else if (now.subtract(1, 'day').isSame(date, 'day')) {
        // Yesterday: show "Yesterday"
        return 'Ytd'
    } else if (now.isSame(date, 'week')) {
        // Same week: show weekday name like "Monday"
        return date.format('ddd')
    } else if (now.isSame(date, 'year')) {
        // Same year: show like "Feb 20"
        return date.format('MMM D')
    } else {
        // Older: show like "2 years ago"
        return date.fromNow()
    }
}

export function removeImageInHTML(html_raw: string) {
    return html_raw.replace(/<img[^>]*>/gi, '')
}

export function getAnyPossibleImageFromHtml(html_raw: string) {
    const matches = [...html_raw.matchAll(/<img[^>]+src="([^">]+)"/gi)]
    return matches.map((m) => m[1])
}

export function dateFormat(date_string: string) {
    return messengerStyleTime(moment(date_string, 'DD MMMM YYYY - h:mma').format())
}

export function getFileNameFromUrl(url?: string) {
    if (url) {
        let file_name = new URL(url)
        return file_name.pathname.split('/').pop()
    }
    return ''
}

export function localStorageSerializer() {
    return {
        serializer: {
            read: (v: any) => (v ? JSON.parse(v) : null),
            write: (v: any) => JSON.stringify(v)
        }
    }
}

export function formatNumber(num: number, decimals = 2): string {
    if (num === null || num === undefined) return ''

    const abs = Math.abs(num)

    const units = [
        { value: 1e12, symbol: 'T' },
        { value: 1e9, symbol: 'B' },
        { value: 1e6, symbol: 'M' },
        { value: 1e3, symbol: 'k' }
    ]

    for (const unit of units) {
        if (abs >= unit.value) {
            return (num / unit.value).toFixed(decimals).replace(/\.0+$|(\.\d*[1-9])0+$/, '$1') + unit.symbol
        }
    }

    return num.toString()
}

export function formatToPreviewImage(url: string): string | null {
    const cleanUrl = url.split('?')[0].split('#')[0]

    if (cleanUrl.toLowerCase().endsWith('.blend')) {
        return 'https://fileinfo.com/img/icons/files/256/blend-1243.png'
    } else if (cleanUrl.toLowerCase().endsWith('.zip')) {
        return 'https://fileinfo.com/img/icons/files/256/zip-1243.png'
    }

    return null
}

export function urlToFileExtension(url: string): string {
    const cleanUrl = url.split('?')[0].split('#')[0]
    const ext = cleanUrl.split('.').pop()?.toLowerCase() || ''
    return ext
}

export function cleanQuery<T extends Record<string, any>>(query: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(query).filter(([_, v]) => v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0))
    ) as Partial<T>
}

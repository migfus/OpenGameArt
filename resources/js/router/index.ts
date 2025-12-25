import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/pages/home/(Index).vue')
    },
    {
        path: '/explore',
        name: 'explore',
        component: () => import('@/pages/pages/explore/(Index).vue')
    },
    {
        path: '/personal-collections',
        name: 'personal_collections',
        component: () => import('@/pages/pages/home/(Index).vue')
    },
    {
        path: '/forums',
        name: 'forums',
        component: () => import('@/pages/pages/home/(Index).vue')
    },
    {
        path: '/faqs',
        name: 'faqs',
        component: () => import('@/pages/pages/faqs/(Index).vue')
    },
    {
        path: '/leaderboards',
        name: 'leaderboards',
        component: () => import('@/pages/pages/home/(Index).vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/auth/login/(Index).vue'),
        meta: {
            guest: true
        }
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/auth/login/(Index).vue'),
        meta: {
            auth: true
        }
    },
    {
        path: '/account-settings',
        name: 'account-settings',
        component: () => import('@/pages/auth/login/(Index).vue'),
        meta: {
            auth: true
        }
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/pages/not-found/(Index).vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    const token = localStorage.getItem('token')

    // Prevent logged-in users from accessing guest routes
    if (to.meta.guest && token) {
        return { name: 'home' } // redirect to an existing route
    }

    if (to.meta.auth && !token) {
        return { name: 'home' } // redirect to an existing route
    }
})

export default router

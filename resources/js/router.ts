import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    const token = localStorage.getItem('token')

    // Prevent logged-in users from accessing guest routes
    if (to.meta.guest && token) {
        return { path: '/' }
    }

    if (to.meta.auth && !token) {
        return { path: '/' }
    }
})

export default router

if (import.meta.hot) {
    handleHotUpdate(router)
}

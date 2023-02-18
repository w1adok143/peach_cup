// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        'minireset.css/minireset.min.css'
    ],
    build: {
        transpile: ['primevue']
    },
    components: [
        {
            path: '~/pages/admin/components',
            pathPrefix: false
        }
    ],
    postcss: {
        plugins: {'postcss-nested': {}}
    }
})
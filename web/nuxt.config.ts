// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        rootId: 'peach-cup'
    },
    build: {
        transpile: ['primevue']
    },
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        'minireset.css/minireset.min.css'
    ],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        },
        {
            path: '~/pages/admin/components',
            pathPrefix: false
        }
    ],
    postcss: {
        plugins: {'postcss-nested': {}}
    },
    modules: [
        '@pinia/nuxt'
    ]
})
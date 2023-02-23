import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', {
    state: () => ({
        menu: [1] as Array<any>
    }),
    actions: {
        async fetchMenu() {
            try {
                const { success, data } = await $fetch('/api/items', { method: 'get' });

                if (success) {
                    this.menu = data.rows;
                }
            } catch (e) {
                console.log('error in fetchMenu')
            }
        }
    }
})
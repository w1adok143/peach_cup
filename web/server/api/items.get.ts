export default defineEventHandler(() => {
    return {
        success: true,
        data: {
            rows: [
                {
                    id: 1,
                    label: 'Статистика',
                    to: '/admin'
                },
                {
                    id: 2,
                    label: 'Меню',
                    items: [
                        {
                            id: 21,
                            label: 'Товари',
                            to: '/admin/menu/items'
                        },
                        {
                            id: 22,
                            label: 'Тех. картки',
                            to: '/admin'
                        },
                        {
                            id: 23,
                            label: 'Напівфабрикати',
                            to: '/admin'
                        },
                        {
                            id: 24,
                            label: 'Інгредієнти',
                            to: '/admin'
                        },
                        {
                            id: 25,
                            label: 'Категорії',
                            to: '/admin/menu/categories'
                        }
                    ]
                },
                {
                    id: 3,
                    label: 'Склад',
                    items: [
                        {
                            id: 31,
                            label: 'Постачання',
                            to: '/admin'
                        },
                        {
                            id: 32,
                            label: 'Списання',
                            to: '/admin'
                        },
                        {
                            id: 33,
                            label: 'Переоблік',
                            to: '/admin'
                        }
                    ]
                },
                {
                    id: 4,
                    label: 'Працівники',
                    to: '/admin'
                },
                {
                    id: 5,
                    label: 'Доступ',
                    to: '/admin'
                },
                {
                    id: 6,
                    label: 'Налаштування',
                    to: '/admin',
                    icon:'pi pi-fw pi-power-off'
                }
            ]
        }
    }
});
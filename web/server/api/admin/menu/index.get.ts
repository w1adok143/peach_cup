export default defineEventHandler(() => {
    return {
        success: true,
        data: {
            rows: [
                {
                    id: 1,
                    parent: null,
                    type: 'main',
                    label: 'Статистика',
                    items: []
                },
                {
                    id: 2,
                    parent: null,
                    type: 'main',
                    label: 'Меню',
                    items: [
                        {
                            id: 21,
                            parent: 2,
                            type: null,
                            label: 'Товари'
                        },
                        {
                            id: 22,
                            parent: 2,
                            type: null,
                            label: 'Тех. картки'
                        },
                        {
                            id: 23,
                            parent: 2,
                            type: null,
                            label: 'Напівфабрикати'
                        },
                        {
                            id: 24,
                            parent: 2,
                            type: null,
                            label: 'Інгредієнти'
                        },
                        {
                            id: 25,
                            parent: 2,
                            type: null,
                            label: 'Категорії'
                        }
                    ]
                },
                {
                    id: 3,
                    parent: null,
                    type: 'main',
                    label: 'Склад',
                    items: [
                        {
                            id: 31,
                            parent: 3,
                            type: null,
                            label: 'Постачання'
                        },
                        {
                            id: 32,
                            parent: 3,
                            type: null,
                            label: 'Списання'
                        },
                        {
                            id: 33,
                            parent: 3,
                            type: null,
                            label: 'Переоблік'
                        }
                    ]
                },
                {
                    id: 4,
                    parent: null,
                    type: 'main',
                    label: 'Працівники',
                    items: []
                },
                {
                    id: 5,
                    parent: null,
                    type: 'main',
                    label: 'Доступ',
                    items: [
                    ]
                },
                {
                    id: 6,
                    parent: null,
                    type: 'main',
                    label: 'Налаштування',
                    items: []
                }
            ]
        }
    }
});
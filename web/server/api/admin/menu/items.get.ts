export default defineEventHandler(() => {
    return {
        success: true,
        data: {
            total: 6,
            rows: [
                {
                    id: 1,
                    label: 'Товар 1',
                    category: 'Категорія 1',
                    price: 110,
                    price_down: 100,
                    price_up: 10
                },
                {
                    id: 2,
                    label: 'Товар 2',
                    category: 'Категорія 2',
                    price: 115,
                    price_down: 100,
                    price_up: 15
                },
                {
                    id: 3,
                    label: 'Товар 3',
                    category: 'Категорія 3',
                    price: 120,
                    price_down: 100,
                    price_up: 20
                },
                {
                    id: 4,
                    label: 'Товар 4',
                    category: 'Категорія 4',
                    price: 121,
                    price_down: 100,
                    price_up: 21
                },
                {
                    id: 5,
                    label: 'Товар 5',
                    category: 'Категорія 5',
                    price: 122,
                    price_down: 100,
                    price_up: 22
                },
                {
                    id: 6,
                    label: 'Товар 6',
                    category: 'Категорія 6',
                    price: 123,
                    price_down: 100,
                    price_up: 23
                }
            ]
        }
    }
});
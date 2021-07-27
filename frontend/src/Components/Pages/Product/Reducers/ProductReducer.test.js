import reducers from '../Reducers/ProductReducers';

test('reducers', () => {
    let state;
    state = reducers({ productList: { loading: true, products: [] } }, {
        type: 'PRODUCT_LIST_SUCCESS', payload: [
            {
                _id: '1',
                name: 'Vestido Rendado Branco',
                category: 'Vestido',
                image: './Assets/03.jfif',
                price: 120, 
                countInStock: 10, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 10, 
                description: 'Produto de alta qualidade, feito sob medida.'
            },
            { 
                _id: '2', 
                name: 'Vestido Rendado Branco',
                category: 'Vestido', 
                image: './Assets/03.jfif', 
                price: 100, 
                countInStock: 20, 
                brand: 'GrifAfro', 
                rating: 4, 
                numReviews: 10, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '3', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/03.jfif', 
                price: 220, 
                countInStock: 0, 
                brand: 'GrifAfro', 
                rating: 4.8, 
                numReviews: 17, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '4', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/04.jfif', 
                price: 78, 
                countInStock: 15, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 14, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '5', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/05.jfif', 
                price: 65, 
                countInStock: 5, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 10, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '6', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/06.jfif', 
                price: 139, 
                countInStock: 12, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 15, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }
        ]
    });
    expect(state).toEqual({ productList: { loading: false, products: 
        [
            { 
                _id: '1', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/03.jfif', 
                price: 120, countInStock: 10, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 10, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '2', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/03.jfif', 
                price: 100, 
                countInStock: 20, 
                brand: 'GrifAfro', 
                rating: 4, 
                numReviews: 10, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '3', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/03.jfif', 
                price: 220, 
                countInStock: 0, 
                brand: 'GrifAfro', 
                rating: 4.8, 
                numReviews: 17, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '4', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/04.jfif', 
                price: 78, 
                countInStock: 15, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 14, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '5', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/05.jfif', 
                price: 65, 
                countInStock: 5, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 10, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }, 
            { 
                _id: '6', 
                name: 'Vestido Rendado Branco', 
                category: 'Vestido', 
                image: './Assets/06.jfif', 
                price: 139, 
                countInStock: 12, 
                brand: 'GrifAfro', 
                rating: 4.5, 
                numReviews: 15, 
                description: 'Produto de alta qualidade, feito sob medida.' 
            }
        ] 
    } });
});
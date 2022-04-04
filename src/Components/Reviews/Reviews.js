import React from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>Products {products.length}</h1>
            {
                products.map(product => <Cart key={product.id} product={product}></Cart>)
            }
        </div>
    );
};

export default Reviews;
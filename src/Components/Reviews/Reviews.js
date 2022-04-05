import React from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import './Reviews.css'

const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1 className='fw-bold mt-4 '>All products Reviews </h1>

            <div className="products-container">
                {
                    products.map(product => <Cart key={product.id} product={product}></Cart>)
                }
            </div>

        </div>
    );
};

export default Reviews;
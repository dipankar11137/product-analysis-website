import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { price, img, rating, commend } = props.product;
    return (
        <div className='container'>
            <div className='cart-style p-3 shadow-lg'>
                <img width="50%" src={img} alt="" />
                <h5 className='mt-5'>{commend}</h5>
                <p>Price : {price}</p>
                <h4 className='mt-3'>Rating : <span className='text-color'>{rating} </span>*</h4>
            </div>
        </div>


    );
};

export default Cart;



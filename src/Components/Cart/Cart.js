import React from 'react';

const Cart = (props) => {
    const { id, name, price, img } = props.product;
    return (
        <div className='container'>
            <div className=' '>
                <div className='col-4 '>
                    <h1>{id}</h1>
                    <img width="50%" src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Cart;
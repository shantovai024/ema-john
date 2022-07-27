import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart-sticky'>
            <h2>Order Summary </h2>
            <p>Selected Items {cart.length} </p>
        </div>
    );
};

export default Cart;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])

    useEffect (()=>{
        fetch('products.json')
        .then (res=> res.json())
        .then (data=>setProducts(data))
    }, [])


    let handleAddToCart = (product) => {
        console.log(product.name)
        let newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product key= {product.id}
                        product = {product}
                        handleAddToCart= {handleAddToCart}
                        > </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}> </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
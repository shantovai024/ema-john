import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    let {name, img, price, seller, ratings} = props.product
//    console.log(props);
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <h5>Manufacturer: {seller}</h5>
                <h5>Ratings: {ratings}</h5>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className="product-btn">
                <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
                
            </button>
        </div>
    );
};

export default Product;
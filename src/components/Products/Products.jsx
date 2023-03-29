import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const { id, category, name, seller, ratings, img, price } = props.product
    const addToCartHandle = props.addToCartHandle
    return (
        <div className='products'>
            <img className='img' src={img} alt="" />
            <div className='details'>
                <h5>{name}</h5>
                <h5>Price: ${price}</h5>
                <h6>Manufacturer: {seller}</h6>
                <h6>Ratings: {ratings} stars</h6>
            </div>
            <button onClick={() => addToCartHandle(props.product)} className='addto-btn'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Products;
import React from 'react';
import './Products.css'

const Products = (props) => {

    const {id, category, name, seller, ratings, img, price, addToCart} = props.product
    return (
        <div className='products'>
            <img className='img' src={img} alt="" />
            <div className='details'>
                <h5>{name}</h5>
                <h5>Price: ${price}</h5>
                <h6>Manufacturer: {seller}</h6>
                <h6>Ratings: {ratings} stars</h6>
            </div>
            <button onClick={addToCart} className='addto-btn'>Add to Cart</button>
        </div>
    );
};

export default Products;
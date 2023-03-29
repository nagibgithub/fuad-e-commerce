import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props)
    const {id, category, name, seller, price, img} = props
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Products;
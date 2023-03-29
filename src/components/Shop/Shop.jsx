import './Shop.css'

import React, {useEffect, useState} from 'react';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setState] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])
    return (
        <div className='Shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product}
                    ></Products>)
                }
            </div>
            <div className="product-cart">
                <h3>Products Carts</h3>
            </div>
        </div>
    );
};

export default Shop;
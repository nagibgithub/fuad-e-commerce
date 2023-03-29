import './Shop.css'
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProdutcs] = useState([])
    const [carts, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProdutcs(data))
    }, [])

    const addToCartHandle = (product) => {
        const newCart = [...carts, product]
        setCart(newCart)
    }

    return (
        <div className='Shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCartHandle={addToCartHandle}
                    ></Products>)
                }
            </div>
            <div className="product-cart">
                <Cart
                    carts={carts}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
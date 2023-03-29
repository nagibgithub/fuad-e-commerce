import './Shop.css'
import React, {useEffect, useState} from 'react';
import Products from '../Products/Products';

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
                <h3>Products Carts</h3>
                <p>Selected Items: {carts.length}</p>
                <p>Total Price: ${carts.length}</p>
            </div>
        </div>
    );
};

export default Shop;
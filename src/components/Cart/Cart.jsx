import './Cart.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { carts } = props
    return (
        <div className='carts'>
            <h3>Products Carts</h3>
            <div className='carts-amount'>
                <div>
                    <p>Selected Items: </p>
                    <p>{carts.length}</p>
                </div>
                <div>
                    <p>Total Price: </p>
                    <p>$</p>
                </div>
                <div>
                    <p>Total Shipping Charge: </p>
                    <p>$</p>
                </div>
                <div>
                    <p>Tax: </p>
                    <p>$</p>
                </div>
            </div>
            <h4>Grand Total: $</h4>
            <div className='cart-btn'>
                <button className='clear-btn'>
                    Clear Cart <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className='review-btn'>
                    Review Order <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Cart;
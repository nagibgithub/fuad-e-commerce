import './Cart.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ carts }) => {

    let totalPrice = 0
    let totalShippingCharge = 0
    for (const cart of carts) {
        totalPrice = totalPrice + cart.price
        totalShippingCharge = totalShippingCharge + cart.shipping
    }
    const tax = (totalPrice * .07).toFixed(2)
    const grandTotal = (totalPrice + totalShippingCharge - tax).toFixed(2)
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
                    <p>${totalPrice}</p>
                </div>
                <div>
                    <p>Total Shipping Charge: </p>
                    <p>${totalShippingCharge}</p>
                </div>
                <div>
                    <p>Tax: </p>
                    <p>${tax}</p>
                </div>
                <div>
                    <h4>Grand Total: </h4>
                    <p>${grandTotal}</p>
                </div>
            </div>
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
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <img src="./src/images/Logo.svg" alt="logo" />
            <div>
                <a href="/Order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
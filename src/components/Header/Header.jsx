import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <a href="home"><img src="../../images/Logo.svg" alt="" /></a>
            <div>
                {/* a*4[href=$]{$} */}
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
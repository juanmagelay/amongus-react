import React from 'react';

import Nav from 'react-bootstrap/Nav';

import '../HuNavbar.css';

const HuCartWidget = () => {
    return (
        <Nav.Link className="hu-navbar-option pr-1">
            Mi carrito
            <img
                alt="Cart"
                src="../assets/icons/cart.svg"
                width="30px"
                height="auto"
            />
        </Nav.Link>
    );
}; 

export default HuCartWidget;
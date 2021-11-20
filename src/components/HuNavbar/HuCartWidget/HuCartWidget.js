import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import '../HuNavbar.css';

const HuCartWidget = () => {
    return (
        <Nav.Link className="hu-navbar-option pr-1">
            <NavLink to='/cart' >
                Mi carrito (1)
                <img
                    alt="Cart"
                    src="../assets/icons/cart.svg"
                    width="30px"
                    height="auto"
                />
            </NavLink>
        </Nav.Link>
    );
}; 

export default HuCartWidget;
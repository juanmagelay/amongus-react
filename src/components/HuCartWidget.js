import React from 'react';

import Nav from 'react-bootstrap/Nav';

const HuCartWidget = () => {
    return (
        <Nav.Link href="#cart">
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
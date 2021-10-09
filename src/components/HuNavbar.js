//import hu-logo from './logo.svg';

import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HuNavbar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
                <Container>
                    <img src="../assets/img/huron-games-logo.png" alt="Huron logo"/>
                    <p>Hola</p>
                </Container>
        </Navbar>
        </>
    );
}; 

export default HuNavbar;
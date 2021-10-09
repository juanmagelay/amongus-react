import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AmNavbar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Huron logo"
                            src="../assets/img/amongus-logo-horizontal.png"
                            width="50px"
                            height="auto"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#amongus">El juego</Nav.Link>
                            <Nav.Link href="#contact">Mi carrito</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    );
}; 

export default AmNavbar;
import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const HuNavbar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Huron logo"
                            src="../assets/img/huron-games-logo.png"
                            width="50px"
                            height="auto"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
                            <Nav.Link href="#amongus">Juego Among Us</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    );
}; 

export default HuNavbar;
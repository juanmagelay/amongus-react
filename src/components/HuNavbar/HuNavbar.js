import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HuCartWidget from './HuCartWidget/HuCartWidget';

import './HuNavbar.css';

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
                            <Nav.Link className="hu-navbar-option" href="#home">¿Quiénes somos?</Nav.Link>
                            <Nav.Link className="hu-navbar-option" href="#amongus">Juego Among Us</Nav.Link>
                            <Nav.Link className="hu-navbar-option" href="#contact">Contacto</Nav.Link>
                            <HuCartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    );
}; 

export default HuNavbar;
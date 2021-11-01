import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavLink, Link } from 'react-router-dom';

import HuCartWidget from './HuCartWidget/HuCartWidget';

import './HuNavbar.css';

export const HuNavbar = () => {
    const categories = [
        { id: '1', address: '/', text: 'Todos los productos' },
        { id: '2', address: '/category/boardGames', text: 'Juegos de mesa' },
        { id: '3', address: '/category/merchandising', text: 'Merchandising' }
      ];
    
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
                            {categories.map((cat) => {
                                return (
                                <Nav.Link className="hu-navbar-option" key={cat.id}>
                                    <NavLink to={cat.address} exact activeClassName="activeClass">
                                    {cat.text}
                                    </NavLink>
                                </Nav.Link>
                                );
                            })}
                        
                            <HuCartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    );
}; 
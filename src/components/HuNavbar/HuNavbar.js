import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';

import HuCartWidget from './HuCartWidget/HuCartWidget';

import './HuNavbar.css';

export const HuNavbar = ({setCartOpen}) => {
    const categories = [
        { id: '1', address: '/', text: 'Todos los productos' },
        { id: '2', address: '/category/boardGames', text: 'Juegos de mesa' },
        { id: '3', address: '/category/merchandising', text: 'Merchandising' }
      ];
    
    return (
        <>
        <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to={'/'}>
                        <Navbar.Brand >
                            <img
                                alt="Huron logo"
                                src="../assets/img/huron-games-logo.png"
                                width="50px"
                                height="auto"
                            />
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {categories.map((cat) => {
                                return (
                                <div key={cat.id}>
                                  
                                        <NavLink to={cat.address} exact activeClassName="activeClass" className="hu-navbar-option">
                                        {cat.text}
                                        </NavLink>
                                   
                                </div>
                                );
                            })}
                        
                            <HuCartWidget 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCartOpen(true);
                                }} 
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    );
}; 
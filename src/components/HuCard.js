import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HuCard = () => {
    return (
        <>
        <Card>
            <Card.Img variant="top" src="../assets/img/imp-box-2.jpg" />
            <Card.Body>
                <Card.Title>Juego de mesa</Card.Title>
                <Card.Text> 2 a 10 jugadores</Card.Text>
                <Card.Text>$3.950</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
        </>
    );
}; 

export default HuCard;
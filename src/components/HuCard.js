import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HuCard = ( { productImg, productTitle, productDescription, productPrice } ) => {
    return (
        <>
        <Card>
            <Card.Img variant="top" src={productImg} />
            <Card.Body>
                <Card.Title>{productTitle}</Card.Title>
                <Card.Text>{productDescription}</Card.Text>
                <Card.Text>{productPrice}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
        </>
    );
}; 

export default HuCard;
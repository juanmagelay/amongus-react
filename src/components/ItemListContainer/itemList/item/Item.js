import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ( { productImg, productTitle, productDescription, productPrice } ) => {
    return (
        <>
        <Card>
            <Card.Img variant="top" src={productImg} />
            <Card.Body>
                <Card.Title>{productTitle}</Card.Title>
                <Card.Text>{productDescription}</Card.Text>
                <Card.Text>{productPrice}</Card.Text>
                <Button className='hu-button-active btn btn-primary btn-lg' variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
        </>
    );
}; 

export default Item;
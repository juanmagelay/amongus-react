import React from 'react';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ( { id, productImg, productTitle, category, productDescription, productPrice } ) => {
    return (
        <>
            <Card className="shadow">
                <Card.Img variant="top" src={productImg} />
                <Card.Body>
                    <Card.Title>{productTitle}</Card.Title>
                    <Card.Text>{productDescription}</Card.Text>
                    <Card.Text>{productPrice}</Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button className='hu-button-active btn btn-primary btn-lg' variant="primary">Ver más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

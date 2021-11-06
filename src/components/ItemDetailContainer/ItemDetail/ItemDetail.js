import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { useCartContext } from "../../../context/CartContext";

import '../../../App.css';

export const ItemDetail = ( { id, productImg, productTitle, productDescription, productLongDescription, productPrice } ) => {
    return !id ? (
        <h1 className="text-center mt-4">Cargando producto</h1>
      ) : (
        <> 
        <Container>
            <Card className="shadow">
                <Row className="text-center">   
                    <Col xs={12} md={4}>
                        <Card.Img variant="top" src={productImg} />
                    </Col>
                    <Col className="align-self-center" xs={12} md={8}>
                        <Card.Body>
                            <Card.Title className="display-4">{productTitle}</Card.Title>
                            <Card.Subtitle>{productDescription}</Card.Subtitle>
                            <Card.Text className="lead">{'$ ' + productPrice.toLocaleString("es-AR")}</Card.Text>
                            <Card.Text>{productLongDescription}</Card.Text>
                            <Button className='hu-button-active btn btn-primary btn-lg' variant="primary" onClick='onClickProduct'>Agregar a Mi carrito</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
        </>
    );
};

/*

Mejorar aca usando del boton la funcion onClickProduct mirando el codigo del profe

El hizo esta funcion que la puso en la Page Products porque tiene el agregar al carrito directo en su home. Yo tendria que ver donde ponerla.

const onClickProduct = (product) => {
    setProducts((prev) => [...prev, product]);
};
*/
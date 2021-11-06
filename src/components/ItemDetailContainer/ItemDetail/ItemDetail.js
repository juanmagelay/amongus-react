import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
                    <Col xs={12} md={8}>
                        <Card.Body>
                            <Card.Title className="display-4">{productTitle}</Card.Title>
                            <Card.Subtitle>{productDescription}</Card.Subtitle>
                            <Card.Text className="lead">{'$ ' + productPrice.toLocaleString("es-AR")}</Card.Text>
                            <Card.Text>{productLongDescription}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
        </>
    );
};

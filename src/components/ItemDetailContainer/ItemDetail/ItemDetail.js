import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import ItemCount from "../../ItemCount/ItemCount"
import '../../../App.css';

export const ItemDetail = ( { id, productImg, productTitle, productDescription, productLongDescription, productPrice, stock } ) => {
    const [buy, setBuy] = useState(false) //Dice si la persona toco en comprar o no
    
    const agregar = (props)=>{
        setBuy(true)
        alert(`Agregaste ${props.unidades} unidades al carrito`)
    }

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
                            {!buy ? <ItemCount stock={stock} onAdd={agregar}/> : 
                            <Link to='/Cart'>
                                <Button className='hu-button-active btn btn-primary btn-lg' variant="primary">Terminar compra</Button>
                            </Link>}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
        </>
    );
};

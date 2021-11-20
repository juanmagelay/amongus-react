import React, {useContext} from "react";
import { Context } from "../../context/CartContext";
import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Cart = ()=>{
    const {cart, unidades, total} = useContext(Context)

    return(
        <>
        <Container className="text-center mt-4 align-self-center">
            {cart.map((item)=>
                <>
                <Card className="w-90 justify-content-between align-items-center shadow m-2">
                    <Row className="justify-content-between align-items-center p-2">
                        <Col xs={12} md={10}>
                            <h5 className="pt-3">Nombre: {item.nombre}</h5>
                            <p>Precio: {'$' + item.precio.toLocaleString("es-AR")}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p className="lead">Subtotal: {'$' + item.subtotal.toLocaleString("es-AR")}</p>
                        </Col>
                        <Col className="text-center" xs={12} md={2}>
                            <Button variant="primary">Quitar</Button>
                        </Col>
                    </Row>
                </Card>
                </>
                )}
                <Card className="w-90 justify-content-between align-items-center shadow m-2">
                    <Row className="justify-content-between align-items-center p-2">
                        { unidades>0 ?
                            <>
                            <Col xs={12} md={10}>
                                <h5 className="pt-2">El total del carrito es <span className="lead">{'$' + total.toLocaleString("es-AR")}</span> y tenés {unidades} productos</h5>
                            </Col>
                            <Col className="text-center" xs={12} md={2}>
                                <Button variant=" hu-button-active btn btn-primary btn-lg">Pagar</Button>
                            </Col>
                            </>
                        :
                            <>
                            <Col xs={12} md={8}>
                                <h5 className="pt-2">El carrito esta vacio, empezá a comprar</h5>
                            </Col>
                            <Col className="text-center" xs={12} md={4}>
                                <Link to='/'>
                                    <Button variant=" hu-button-active btn btn-primary btn-lg">Ver productos</Button>
                                </Link>
                            </Col>
                            </> 
                        }
                    </Row>
                </Card>
        </Container>
        </>
    )
}

export default Cart
import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import ItemCount from "../../ItemCount/ItemCount"
import { Context } from "../../../context/CartContext"
import '../../../App.css';

export const ItemDetail = ( { id, productImg, productTitle, productDescription, productLongDescription, productPrice, stock } ) => {
    const [buy, setBuy] = useState(false) //Dice si la persona toco en comprar o no
    const {onAdd} = useContext(Context)

    const agregar = (props)=>{
        setBuy(true)
        onAdd({id,productTitle,productPrice}, props.unidades)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Agregaste ${props.unidades} unidades al carrito`,
            showConfirmButton: false,
            timer: 2000
          })
    }

    return !id ? (
        <>
        <div></div>
        </>
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

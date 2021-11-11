import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import React, {useState} from "react";
import { Col } from 'react-bootstrap';


const ItemCount = (props) =>{

    const [stock, setStock] = useState(props.stock) //Stock que le viene del ItemDetails
    const [unidades, setUnidades] = useState(0) //Unidades seleccionadas

    const handleStock={
        sumaStock:()=>{
            if(stock===0){
                alert('No hay más stock')
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades===0){
                alert('No podés seleccionar menos de 0')
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }

    return(
            <Container>
                <Row className="text-center d-flex justify-content-around">
                    <Container>
                        <p>Stock disponible {stock}</p>
                        <Col className="text-center d-flex justify-content-center">
                            <button onClick={handleStock.restaStock} >-</button>
                            <p>{unidades}</p>
                            <button onClick={handleStock.sumaStock} >+</button>
                        </Col>
                    </Container>
                </Row>
                <Button className='hu-button-active btn btn-primary btn-lg' variant="primary" onClick={()=>props.onAdd({unidades})}>
                    Agregar a Mi carrito
                </Button>
            </Container>
    )
}

export default ItemCount
import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemCount = (props) =>{

    const [stock, setStock] = useState(props.stock) //Stock que le viene del ItemDetails
    const [unidades, setUnidades] = useState(0) //Unidades seleccionadas

    const handleStock={
        sumaStock:()=>{
            if(stock>0){
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades>0){
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
                        <div className="text-center d-flex justify-content-center">
                            <button onClick={handleStock.restaStock} disabled={unidades === 0}>-</button>
                            <p>{unidades}</p>
                            <button onClick={handleStock.sumaStock} disabled={stock === 0}>+</button>
                        </div>
                    </Container>
                </Row>
                <Button className='hu-button-active btn btn-primary btn-lg' variant="primary" onClick={()=>props.onAdd({unidades})} disabled={unidades === 0}>
                    Agregar a Mi carrito
                </Button>
            </Container>
    )
}

export default ItemCount
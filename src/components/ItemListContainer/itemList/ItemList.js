import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Item from './item/Item';

const ItemList = ({products}) => {
    return (
        <>
        <Container>
            <Row className="text-center">     
                {products?.map((items) => (
                    <Col className='mb-2' xs={12} md={4} key={items?.id}>
                        <Item
                            productImg={items?.productImg} 
                            productTitle={items?.productTitle} 
                            productDescription={items?.productDescription} 
                            productPrice={'$ ' + items?.productPrice.toLocaleString("es-AR")} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
}; 

export default ItemList;






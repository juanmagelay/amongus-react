import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HuCard from './HuCard';

const HuItemCardsList = () => {
    const productData = [
        {
            id: 1,
            productImg: "../assets/img/imp-box-2.jpg",
            productTitle: "Juego de mesa Among Us",
            productDescription: "2 a 10 jugadores",
            productPrice: 3350
        },
        {
            id: 2,
            productImg: "../assets/img/imp-cup.png",
            productTitle: "Taza Among Us",
            productDescription: "Modelos a elección",
            productPrice: 850
        },
        {
            id: 3,
            productImg: "../assets/img/imp-figures.jpg",
            productTitle: "3 muñecos 3D Among Us",
            productDescription: "Colores a elección",
            productPrice: 650
        }
    ];
    return (
        <>
        <Container>
            <Row className="text-center">     
                {productData?.map((items) => (
                    <Col xs={12} md={4} key={items?.id}>
                        <HuCard
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

export default HuItemCardsList;






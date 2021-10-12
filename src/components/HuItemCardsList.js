import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HuCard from './HuCard';

const HuItemCardsList = () => {
    const productData = [
        {
            productImg: "../assets/img/imp-box-2.jpg",
            productTitle: "Juego de mesa Among Us",
            productDescription: "2 a 10 jugadores",
            productPrice: "$3.350"
        },
        {
            productImg: "../assets/img/imp-cup.png",
            productTitle: "Taza Among Us",
            productDescription: "Modelos a elección",
            productPrice: "$850"
        },
        {
            productImg: "../assets/img/imp-figures.jpg",
            productTitle: "3 muñecos 3D Among Us",
            productDescription: "Colores a elección",
            productPrice: "$650"
        }
    ];
    return (
        <>
        <Container>
            <Row className="text-center">     
                {productData?.map((items) => (
                    <Col xs={12} md={4}>
                        <HuCard 
                            productImg={items?.productImg} 
                            productTitle={items?.productTitle} 
                            productDescription={items?.productDescription} 
                            productPrice={items?.productPrice} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
}; 

export default HuItemCardsList;






import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HuCard from './HuCard';

const HuItemCardsList = () => {
    return (
        <>
        <Container>
            <Row className="text-center">
                <Col xs={12} md={4}>
                    <HuCard />
                </Col>
                <Col xs={12} md={4}>
                    <HuCard />
                </Col>
                <Col xs={12} md={4}>
                    <HuCard />
                </Col>
            </Row>
        </Container>
        </>
    );
}; 

export default HuItemCardsList;
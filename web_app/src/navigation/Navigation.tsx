import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Navigation(){
    return <>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>Canvas.ME</Navbar.Brand>
            </Container>
        </Navbar>
    </>
}
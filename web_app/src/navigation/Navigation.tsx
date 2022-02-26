import React from 'react';
import {Outlet} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Navigation(props:any){
    return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Collapse>
                    <LinkContainer to="/">
                        <Navbar.Brand>Canvas.ME</Navbar.Brand>
                    </LinkContainer>
                    <Nav>
                        <LinkContainer to="/canvas-results">
                            <Nav.Link>Canvas Results</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/canvas-results/add">
                            <Nav.Link>Add Canvas Result</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <Outlet/>
        </Container>
    </>
}
import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Navigation(props: any) {
    return <>
        <Navbar className="header-navigation" collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Canvas.ME</Navbar.Brand>
                </LinkContainer>
            </Container>
        </Navbar>
        <Container>
            <Outlet />
        </Container>
    </>
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Form } from 'react-bootstrap';



import 'bootstrap/dist/css/bootstrap.min.css';

import theme from '../../styles/theme';
import './styles.css'


function NavBar() {
    return (
        <>
            <Navbar bg={theme.background} expand="md">
                <Container>
                    <Navbar.Brand href="#home">Balanced Nature</Navbar.Brand>

                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                    <Nav className='justify-content-end'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            /></Form>

                        <Button variant="secondary" size="sm">
                            Login
                        </Button>
                        <Button variant="secondary" size="sm">
                            Registro
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
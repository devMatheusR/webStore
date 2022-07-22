import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import 'bootstrap/dist/css/bootstrap.min.css';


import './styles.css'

function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container className='container-fluid' style={{ height: 100 }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ justifyContent: 'center' }}>
                            <Nav.Link href="#home">Desconto verde</Nav.Link>
                            <Nav.Link href="#home">Alimentos</Nav.Link>
                            <Nav.Link href="#home">Bebidas</Nav.Link>
                            <Nav.Link href="#home">Mercearia</Nav.Link>
                            <Nav.Link href="#home">Suplementos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
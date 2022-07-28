import * as React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import SearchAppBar from '../SearchAppBar';
import { Button, Stack } from '@mui/material';

import theme from '../../styles/theme';
import './styles.css';
import '../../assets/fonts/fonts.css';


function NavBar() {
    return (
        <Navbar className='nav-main' expand="sm" fixed='top' >
            <Container fluid>
                <p className='nav-title'>Balanced Nature</p>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto'>
                        <SearchAppBar />
                        <Stack spacing={2} direction="row">
                            <Button sx={{
                                fontSize: 14,
                                fontWeight: 500,
                                color: theme.textPrimary
                            }} variant="text">Login</Button>

                            <Button sx={{
                                fontSize: 14,
                                fontWeight: 500,
                                borderRadius: 5,
                                backgroundColor: '#FFFF',
                                color: theme.textPrimary
                            }} variant="contained">Registro</Button>

                        </Stack>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
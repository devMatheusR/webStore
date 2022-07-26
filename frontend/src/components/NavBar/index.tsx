import * as React from 'react';

import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Stack, Button, Divider, TextField, Box, Icon } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



import theme from '../../styles/theme';
import './styles.css'

function NavBar() {
    return (
        <Navbar className='navbar-main' collapseOnSelect expand="lg" bg='dark'>
            <Container>
                <Navbar.Brand>Balanced Nature</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchOutlinedIcon sx={{ color: 'action.active',  mr: 1, my: 0.5}}/>
                        <TextField id="input-with-sx" variant="standard" sx={{ color: 'white'}}/>

                        <Divider orientation="vertical" flexItem style={{ width: 1 }} />
                        <Button variant='text'>Entrar</Button>
                        <Button variant='contained'>Registro</Button>
                    </Box>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
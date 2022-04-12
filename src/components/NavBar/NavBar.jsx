import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
// import { NavLink } from 'react-bootstrap';
export default function NavBar  ()  {
    

    return (
        <>
        <Navbar bg="dark" className='p-1' variant="dark">
            <Container className='ms-5'>
            <Navbar.Brand href="#home" className='fs-3'>Navbar</Navbar.Brand>
            <Nav className="text-center mt-1 mb-1 fs-5">
                <Nav.Link href="#home" className='pe-3'>Home</Nav.Link>
                <Nav.Link href="#features" className='pe-3'>Shop</Nav.Link>
                <Nav.Link href="#pricing" className='pe-3'>About us</Nav.Link>
            </Nav>
            <CartWidget/>
            </Container>
            
        </Navbar>   
        </>
    );
};




import React from "react";
import {Navbar , Nav, Container} from "react-bootstrap";

export default function NavBar(){

    return (
        < >
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Tienda de Productos de Marvel</Navbar.Brand>
                    <Nav className="content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Tienda">Tienda</Nav.Link>
                        <Nav.Link href="#Personajes">Personajes</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    
        </ >
    );
}
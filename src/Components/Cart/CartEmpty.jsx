import { Button, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function CartEmpty(){
    return (
    <> 
    <Container className="text-center">
        <h2 className="text-center pt-4"> ¡Parece que no hay nada por aqui!</h2>
        <Button size="lg" variant="dark"><Link to={'/'}>Ir a Productos</Link> </Button>
    </Container>
        
    </>
    )
}
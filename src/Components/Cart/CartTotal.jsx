import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../../Context/CartContext";

export default function CartTotal(){
    let {carrito} = useContext(Context);
    let total = 0;
    for (const obj of carrito) {
        total += obj.quantity*obj.price;
    }
    return (
    <>
        <Container className="text-white fs-4">
            El total de la compra es: $ {total}.
        </Container>
    </>
    )
}
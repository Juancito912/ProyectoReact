import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../../Context/CartContext";
import Cart from "./Cart";
import CartTotal from "./CartTotal";

export default function CartTable({item}){
    let {carrito,clear} = useContext(Context);
    return (
    <>  
        <Table striped bordered hover variant="dark" className="mt-2">
            <thead>
                <tr>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {carrito.map( obj => <Cart key={obj.id} item={obj}/>)}
            </tbody>
        </Table>
        <CartTotal/>
        <Button className="mt-3" onClick={()=>{clear()}}>Vaciar Carrito</Button>
    </>
    )
}
import React, { useContext } from "react";
import { Context } from "../../Context/CartContext";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";

export default function CartContainer(){
    let {carrito} = useContext(Context);
    
    return (
    <>
        {(carrito.length === 0)?<CartEmpty/> : <CartTable/>}
    </>
    );
}
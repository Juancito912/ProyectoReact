import React, { useContext } from "react";
import { Context } from "../../Context/CartContext";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";

export default function CartContainer(){
    let {carrito} = useContext(Context);
    const carritoEmpty= () => {
        if(carrito.length === 0){
            return true;
        }
        return false;
    }
    return (
    <>
        {carritoEmpty()?<CartEmpty/> : <CartTable/>}
        {/* {carrito.map(obj => <Cart key={obj.id} item={obj}/>)} */}
    </>
    );
}
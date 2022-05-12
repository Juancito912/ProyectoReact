import React, { useContext } from "react";
import { Context } from "../../Context/CartContext";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";
import { Typography } from "@mui/material";

export default function CartContainer(){
    let {carrito} = useContext(Context);
    
    return (
    <>
        <Typography variant="h5" color="black" sx={{fontSize:'2rem',m:1}} textAlign="center"> 
            Carrito de Compras
        </Typography>
        {(carrito.length === 0)?<CartEmpty/> : <CartTable/>}
    </>
    );
}
import React, { useContext } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Context } from '../../Context/CartContext';
import Typography from '@mui/material/Typography'

export default function CartWidget() {
    let {carrito} = useContext(Context);
    let cantProducts = 0;
    for(let product of carrito){
        cantProducts += product.quantity;
    }
    return (
    <>
        <ShoppingCartRoundedIcon />
        <Typography variant="h6" color="inehrit">{cantProducts}</Typography>
    </>
    );
}
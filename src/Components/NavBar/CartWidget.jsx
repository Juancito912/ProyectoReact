import React, { useContext,useEffect } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Context } from '../../Context/CartContext';
import Typography from '@mui/material/Typography'

export default function CartWidget() {
    let {totalQuantity,getQuantity,carrito} = useContext(Context);
    useEffect(() => {
      getQuantity();
    }, [carrito]);
    
    return (
    <>
        <ShoppingCartRoundedIcon />
        <Typography variant="h6" color="inehrit">{totalQuantity}</Typography>
    </>
    );
}
import React, { useContext,useEffect } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Context } from '../../Context/CartContext';
import { Badge } from '@mui/material';

export default function CartWidget() {
    let {totalQuantity,getQuantity,carrito} = useContext(Context);
    useEffect(() => {
      getQuantity();
    }, [carrito]);
    
    return (
    <>
        <Badge color="secondary" badgeContent={totalQuantity}>
          <ShoppingCartRoundedIcon />
        </Badge>
    </>
    );
}
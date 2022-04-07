import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';


export default function CartWidget() {
    return (
    <>
    <IconButton color="primary" aria-label="upload picture" component="span">
    <ShoppingCartIcon />
    </IconButton>
    
    </>
    );
}
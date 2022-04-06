import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';

export default function CartWidget() {
    return (
    <>
    <ShoppingCartIcon fontSize="large" sx={{ color: pink[500] }} />
    
    </>
    );
}
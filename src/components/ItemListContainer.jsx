import React from 'react';
import ItemCount from './ItemCount';
// import Typography from '@mui/material/Typography';


export default function ItemListContainer() {
    let initial = 1;
    let stock = 5;
    const onAdd = (num) => {
        alert(`Compro ${num} productos`);
    };

    return (
    <>
        <ItemCount initial ={initial} stock ={stock} onAdd ={onAdd} />
    </>
    );
}
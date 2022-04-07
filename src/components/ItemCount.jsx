import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ItemCount({initial,stock,onAdd}) {
    const [cant,setCant] = useState(initial);
    let x=cant;
    return (
    <>
        <Box sx={{ '& button': { m: 1 }, width:'45%'}}>
            
            <div>
                <Button variant="contained" size="small" onClick ={()=>{
                    if(cant === 1){
                        setCant(1);
                        x=1;
                        console.log(x);
                    }else{setCant(--x);}
                    
                }}> - </Button>
                <Typography component="span" variant="h6">{x}</Typography>
                <Button variant="contained" size="small" onClick={()=>{
                    if(cant === stock){
                        setCant(stock);
                        x=stock;
                        alert("No hay mas stock");
                    }else{setCant(++x);}
                    
                }}> + </Button>
            </div>
            <Button variant="contained" color="success" onClick={()=> onAdd(x)}>Agregar al Carrito</Button>
        </Box>
    </>
    );
}
import React, { useState } from 'react';
import Container from '@mui/material/Container'
import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function ItemCount({initial,stock,onAdd}) {

    const [cant,setCant] = useState(initial);
    let x=cant;
    
    return (
    <>
        <IconButton aria-label="remove" color='error' size='medium' onClick ={()=>{
                    if(cant === 1){
                        setCant(1);
                        x=1;
                    }else{setCant(--x);}
                    
                }}>
            <RemoveIcon />
        </IconButton>
        <Typography variant="h6" color="black" component={"span"}>{x}</Typography>
        <IconButton aria-label="add" color='error' size='medium' onClick={()=>{
                    if(cant === stock){
                        setCant(stock);
                        x=stock;
                        alert("No hay mas stock");
                    }else{setCant(++x);}
                    
                }}>
            <AddIcon />
        </IconButton>
        
        {/* <div>
            <Button variant="danger" size="md"  onClick ={()=>{
                    if(cant === 1){
                        setCant(1);
                        x=1;
                    }else{setCant(--x);}
                    
                }}> <IoMdRemoveCircle className='mb-1'/>
            </Button>
                <span className='pe-2 ps-2'>{x}</span>
            <Button variant="danger" size="md" onClick={()=>{
                    if(cant === stock){
                        setCant(stock);
                        x=stock;
                        alert("No hay mas stock");
                    }else{setCant(++x);}
                    
                }}> <IoMdAddCircle className='mb-1'/> 
            </Button>
        </div>
        
        <Button variant="outline-danger" size='lg' className='mt-3 pb-2' onClick={()=> {onAdd(x)}}>
            Agregar al Carrito
        </Button> */}
        
    </>
    );
}
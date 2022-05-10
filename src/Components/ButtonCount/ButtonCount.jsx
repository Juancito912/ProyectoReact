import React, { useState } from 'react';
import { IconButton, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import ButtonCountAdd from './ButtonCountAdd';

export default function ButtonCount(props) {

    const [cant,setCant] = useState(props.initial);
    let x=cant;
    
    return (
    <>
    <Box sx={{display:'flex',maxWidth:250,flexDirection:'column'}}>
    <Box sx={{width:'80%'}}>
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
                    if(cant === props.stock){
                        setCant(props.stock);
                        x=props.stock;
                        alert("No hay mas stock");
                    }else{setCant(++x);}
                    
                }}>
            <AddIcon />
        </IconButton>
        </Box>
        {props.showAddCart?<ButtonCountAdd onAdd={props.onAdd} qty={x} product={props.product} />:null}
        
        </Box>  
    </>
    );
}
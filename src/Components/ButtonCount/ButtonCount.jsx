import React, { useState,useContext } from 'react';
import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import ButtonCountAdd from './ButtonCountAdd';
import { Context } from '../../Context/CartContext';


export default function ButtonCount(props) {

    const [cant,setCant] = useState(props.initial);
    let x=cant;
    let {setQuantityItem}= useContext(Context);
    const setAll = (x)=>{
        setCant(x);
        if(props.productCart){
            setQuantityItem(props.productCart.id,x);
            props.setter(x);
        }
        
    }
    
    return (
    <>
    <Box sx={{display:'flex',flexWrap:'wrap',alignContent:'flex-start',maxWidth:250,flexDirection:`${props.showAddCart?'column':'row'}`,alignItems:'center'}}>
    <Box sx={{}}>
        <IconButton aria-label="remove" color='error' size='medium' onClick ={()=>{
                    if(cant === 1){
                        x=1;
                        setAll(1);
                        
                    }else{
                        setAll(--x)
                    }
                    
                }}>
            <RemoveIcon />
        </IconButton>
        <Typography variant="h6" color="black" component={"span"}>{x}</Typography>
        <IconButton aria-label="add" color='error' size='medium' onClick={()=>{
                    if(cant === props.stock){
                        x=props.stock;
                        setAll(x);
                        alert("No hay mas stock");
                    }else{
                        setAll(++x);
                    }
                }}>
            <AddIcon />
        </IconButton>
        </Box>
        {props.showAddCart?<ButtonCountAdd onAdd={props.onAdd} qty={x} productCart={props.product} />:null}
        
        </Box>  
    </>
    );
}
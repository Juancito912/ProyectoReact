import React, { useState } from 'react';
import Container from '@mui/material/Container'
import { IconButton, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ItemCartModal from './ItemCartModal';

export default function ItemCount(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [cant,setCant] = useState(props.initial);
    let x=cant;
    
    const handleShowModal = () => {
        props.onAdd(x);
        handleOpen();
    }
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
        
        <Button variant="contained" color="error" endIcon={<AddShoppingCartIcon />} onClick={()=> {handleShowModal()}}>Agregar al Carrito</Button>
        <ItemCartModal open={open} onClose={handleClose} quantity={x} product={props.product} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"/>
    </Box>
        
        
        
        
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
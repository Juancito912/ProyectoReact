import React,{useState} from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton, Typography, Button } from '@mui/material';
import ButtonCountModal from './ButtonCountModal';

export default function ButtonCountAdd(props){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleShowModal = () => {
        props.onAdd(props.qty);
        handleOpen();
    }

    return (
        <>
            <Button variant="contained" color="error" endIcon={<AddShoppingCartIcon />} onClick={()=> {handleShowModal()}}>Agregar al Carrito</Button>
            <ButtonCountModal open={open} onClose={handleClose} quantity={props.qty} product={props.product} aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"/>
        </>
    )
}
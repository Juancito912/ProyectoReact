import React, { useContext,useState } from "react";
import { Context } from "../../Context/CartContext";
import { Table, TableContainer,Paper, Button } from "@mui/material";
import Cart from "./Cart";
import CartTotal from "./CartTotal";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import CartCheckModal from "./CartCheckModal";

export default function CartTable({item}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let {carrito,clear} = useContext(Context);
    return (
    <>  
        
        <Box sx={{display:{xs:'none',sm:'block'}}}>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 700 }} >
                <TableHead sx={{bgcolor:'gray'}}>
                    <TableRow>
                        <TableCell sx={{fontSize:'1.1rem',pl:3}}>Productos</TableCell>
                        <TableCell sx={{fontSize:'1.1rem'}}>Precio</TableCell>
                        <TableCell sx={{fontSize:'1.1rem'}}>Unidades</TableCell>
                        <TableCell sx={{fontSize:'1.1rem'}}>Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {carrito.map( obj => <Cart key={obj.id} item={obj}/>)}
                    <CartTotal/>
                </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{display:'flex',justifyContent:'flex-end',p:1,mr:1}}>
            <Button variant="contained" color="error" onClick={()=>{clear()}} sx={{':hover':{color:'black'}}}>Vaciar Carrito</Button>
            
            </Box>
            
        </Box>
        <Box sx={{display:{xs:'block',sm:'none'}}}>
            {carrito.map( obj => <Cart key={obj.id} item={obj} Xs/>)}
            <CartTotal Xs/>
            <Box sx={{display:'flex',justifyContent:'flex-end',p:1,mr:1}}>
            <Button variant="contained" color="error" onClick={()=>{clear()}} sx={{':hover':{color:'black'}}}>Vaciar Carrito</Button>
            
            </Box>
        </Box>
        <Box sx={{display:'flex',justifyContent:'flex-end',p:1,mr:1}}>
            <Button variant="contained" as={Link} to={'/'} color="primary" sx={{textDecoration:'none',':hover':{color:'black'},mr:2}}>Seguir Comprando</Button>
            <Button variant="contained" onClick={()=>{handleOpen()}} color="success" sx={{display:'inline-flex',justifyContent:'center',alignItems:'center',':hover':{color:'black'}}}>Terminar Compra</Button>
            <CartCheckModal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"/>
        </Box>

        
    </>
    )
}
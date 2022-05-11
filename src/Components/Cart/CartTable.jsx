import React, { useContext } from "react";
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

export default function CartTable({item}){
    let {carrito,clear} = useContext(Context);
    return (
    <>  
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} >
            <TableHead sx={{bgcolor:'gray'}}>
                <TableRow>
                    <TableCell sx={{fontSize:'1.1rem',pl:3}}>Productos</TableCell>
                    <TableCell sx={{fontSize:'1.1rem'}}>Precio</TableCell>
                    <TableCell sx={{fontSize:'1.1rem'}}>Unidades</TableCell>
                    <TableCell sx={{fontSize:'1.1rem'}}>Subtotal</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {carrito.map( obj => <Cart key={obj.id} item={obj}/>)}
                <CartTotal/>
            </TableBody>
            </Table>
        </TableContainer>
        <Box sx={{display:'flex',justifyContent:'flex-end',mr:5,p:1}}>
        <Button variant="contained" as={Link} to={'/'} color="error" sx={{textDecoration:'none',':hover':{color:'black'}}}>Seguir Comprando</Button>
        <Button variant="contained" color="error" onClick={()=>{clear()}} sx={{':hover':{color:'black'},ml:2}}>Vaciar Carrito</Button>
        </Box>
        
        
    </>
    )
}
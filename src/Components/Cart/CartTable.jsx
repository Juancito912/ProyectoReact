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
        </Box>
        <Box sx={{display:{xs:'block',sm:'none'}}}>
        {carrito.map( obj => <Cart key={obj.id} item={obj} Xs/>)}
        <CartTotal Xs/>
        </Box>
        <Box sx={{display:'flex',justifyContent:'flex-end',p:1}}>
            <Button variant="contained" as={Link} to={'/'} color="success" sx={{textDecoration:'none',':hover':{color:'black'}}}>Seguir Comprando</Button>
            <Button variant="contained" color="success" onClick={()=>{clear()}} sx={{':hover':{color:'black'},ml:2,mr:2}}>Vaciar Carrito</Button>
            <Button variant="contained" as={Link} to={'/'} color="success" sx={{textDecoration:'none',':hover':{color:'black'}}}>Terminar Compra</Button>
        </Box>

        
    </>
    )
}
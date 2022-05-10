import React, { useContext } from "react";
import { Context } from "../../Context/CartContext";
import { Table, TableContainer,Paper } from "@mui/material";
import Cart from "./Cart";
import CartTotal from "./CartTotal";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

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
            </TableBody>
            </Table>
        </TableContainer>

        <CartTotal/>
        {/* <Button className="mt-3" onClick={()=>{clear()}}>Vaciar Carrito</Button> */}
    </>
    )
}
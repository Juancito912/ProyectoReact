import React, { useContext } from "react";
import { Context } from "../../Context/CartContext";
import { Box, TableCell,TableRow ,Container, Typography, Button} from "@mui/material";

const TAX_RATE = 0.21;
export default function CartTotal(){
    let {carrito} = useContext(Context);
    let subtotal = 0;
    for (const obj of carrito) {
        subtotal += obj.quantity*obj.price;
    }
    const calculateTax = ()=>{
        return subtotal*TAX_RATE;
    }
    const calculateTotal = ()=>{
        
        return (calculateTax())+subtotal;
    }
    return (
    <>
        
        <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell >$ {subtotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell >I.V.A</TableCell>
            <TableCell colSpan={1} >{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell colSpan={1} >$ {calculateTax()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell >$ {calculateTotal()}</TableCell>
          </TableRow>
    </>
    )
}
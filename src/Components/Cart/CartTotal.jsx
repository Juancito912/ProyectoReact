import React, { useContext } from "react";
import { Context } from "../../Context/CartContext";
import { Box, TableCell,TableRow ,Container, Typography, Button} from "@mui/material";

const TAX_RATE = 0.07;
export default function CartTotal(){
    let {carrito} = useContext(Context);
    let total = 0;
    for (const obj of carrito) {
        total += obj.quantity*obj.price;
    }
    return (
    <>
        {/* <Container className="text-white fs-4">
            El total de la compra es: $ {total}.
        </Container> */}
        <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">dawwa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">ddwad</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">ddad</TableCell>
          </TableRow>
    </>
    )
}
import React, { useContext} from "react";
import { Context } from "../../Context/CartContext";
import {  TableCell,TableRow,Box,List,ListItem,Divider, Typography } from "@mui/material";


const TAX_RATE = 0.21;
export default function CartTotal({Xs}){
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
    if(Xs){
      return (
        <>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' ,flexDirection:'column'}}>
      
            <List>
              <ListItem>
                <Typography variant="h3" color="black" sx={{fontSize:'1.5rem'}}>Resumen de la Compra</Typography>
              </ListItem>
              <Divider />
              <ListItem sx={{flexDirection:'row',justifyContent:'space-around'}}>
                <Typography variant="body1" color="black" sx={{fontSize:'1rem'}}>Subtotal</Typography>
                <Typography variant="body1" color="black" sx={{fontSize:'1rem'}}>$ {subtotal}</Typography>
              </ListItem>
              <Divider />
              <ListItem sx={{flexDirection:'row',justifyContent:'space-around'}}>
                <Typography variant="body1" color="black" sx={{fontSize:'1rem'}}>I.V.A:{`${(TAX_RATE * 100).toFixed(0)} %`}</Typography>
                <Typography variant="body1" color="black" sx={{fontSize:'1rem'}}>$ {calculateTax().toFixed(2)}</Typography>
              </ListItem>
              <Divider />
              <ListItem sx={{flexDirection:'row',justifyContent:'space-around'}}>
                <Typography variant="body1" color="black" sx={{fontSize:'1rem',pl:4}}>Total</Typography>
                <Typography variant="body1" color="black" sx={{fontSize:'1rem'}}>$ {calculateTotal().toFixed(2)}</Typography>
              </ListItem>
              <Divider />
            </List>
          </Box>
        </>
      )
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
            <TableCell colSpan={1} >$ {calculateTax().toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell >$ {calculateTotal().toFixed(2)}</TableCell>
          </TableRow>
    </>
    )
}
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/CartContext";
import { Box, TableCell,TableRow , Typography, Button} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ButtonCount from "../ButtonCount/ButtonCount";
import { Link } from "react-router-dom";

const calculatePrice = (price,qty) =>{
    return price*qty;
}
export default function Cart({item}){
    let {removeItem} = useContext(Context);
    const [cartQuantity,setCartQuantity] = useState(item.quantity);
    
    return (
    <>  
        <TableRow sx={{color:'black'}}>
              <TableCell >
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Box sx={{}}>
                    <img src={item.img} alt={item.name} 
                        style={{display:'block',objectFit:'cover',height:'7vh'}}
                    />
                    </Box>
                    <Typography as={Link} to={`/item/${item.id}`} sx={{flex:1,fontSize:'1.2rem',textDecoration:'none',':hover':{color:'black'}}} 
                        variant="h5" color="black">
                        {item.name}
                        </Typography>
                </Box>
              
              </TableCell>
              <TableCell >
              <Typography sx={{fontSize:'1rem'}} variant="h6" color="black">$ {item.price}</Typography>
              </TableCell>
              <TableCell sx={{fontSize:'1rem'}}>
                <ButtonCount initial={cartQuantity} stock={item.stock} product={item} setter={setCartQuantity}/>
              </TableCell>
              <TableCell sx={{fontSize:'1rem'}}>
                <Typography sx={{fontSize:'1rem'}} variant="h6" color="black">$ {calculatePrice(item.price,cartQuantity)}</Typography>
              </TableCell>
              <TableCell>
              <Button variant='contained' color='error' size="medium" onClick={()=>{removeItem(item.id)}}
                sx={{textDecoration:'none', color:'white',':hover':{color:'white'}}}>
                    <DeleteForeverIcon/>
                </Button>
              </TableCell>
            </TableRow>
    </>
    );
}
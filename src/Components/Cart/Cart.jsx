import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/CartContext";
import { Box, TableCell,TableRow , Typography, Button} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ButtonCount from "../ButtonCount/ButtonCount";

const calculatePrice = (price,qty) =>{
    return price*qty;
}
export default function Cart({item}){
    let {removeItem} = useContext(Context);
    const [quantity,setQuantity] = useState(item.quantity)
    useEffect(() => {
        setQuantity(quantity);
      }, [quantity]);
      
    
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
                    <Typography sx={{flex:1,fontSize:'1.2rem'}} variant="h5" color="black">{item.name}</Typography>
                </Box>
              
              </TableCell>
              <TableCell >
              <Typography sx={{fontSize:'1rem'}} variant="h6" color="black">$ {item.price}</Typography>
              </TableCell>
              <TableCell sx={{fontSize:'1rem'}}>
                {/* <Typography sx={{fontSize:'1rem'}} variant="h6" color="black">{item.quantity}</Typography> */}
                <ButtonCount initial={quantity} stock={item.stock} setter={setQuantity}/>
              </TableCell>
              <TableCell sx={{fontSize:'1rem'}}>
                <Typography sx={{fontSize:'1rem'}} variant="h6" color="black">$ {calculatePrice(item.price,item.quantity)}</Typography>
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
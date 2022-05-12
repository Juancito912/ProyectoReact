import React, { useContext, useState } from "react";
import { Context } from "../../Context/CartContext";
import { Box, TableCell,TableRow , Typography,IconButton, Container, Divider} from "@mui/material";
import ButtonCount from "../ButtonCount/ButtonCount";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';

const calculatePrice = (price,qty) =>{
    return price*qty;
}
export default function Cart({item,Xs}){
    let {removeItem} = useContext(Context);
    const [cartQuantity,setCartQuantity] = useState(item.quantity);

    if(Xs){
      return (
        <>
        <Divider/>
        <TableCell>
        <Box sx={{display:'flex',alignItems:'center'}}>
          <IconButton aria-label="add" color='error' sx={{color:'black'}} size='medium' onClick={()=>{removeItem(item.id)}} >
            <ClearIcon />
          </IconButton>
          <Box sx={{}}>
            <img src={item.img} alt={item.name} 
                style={{display:'block',objectFit:'cover',height:'12vh'}}
            />
          </Box>
          <Container>
            <Typography as={Link} to={`/item/${item.id}`} 
              sx={{flex:1,fontSize:'1.2rem',textDecoration:'none',':hover':{color:'black'}}} 
              variant="h6" color="black">
              {item.name}
            </Typography>
            <Typography  
              sx={{flex:1,fontSize:'1.2rem',textDecoration:'none',':hover':{color:'black'}}} 
              variant="h5" color="black">
              Precio: $ {item.price}
            </Typography>
            <Typography  
              sx={{flex:1,fontSize:'1.2rem',textDecoration:'none',':hover':{color:'black'}}} 
              variant="h5" color="black">
              Subtotal: $ {calculatePrice(item.price,cartQuantity)}
            </Typography>
          <ButtonCount initial={cartQuantity} stock={item.stock} productCart={item} setter={setCartQuantity}/>
        
        </Container>
        
        </Box>

        </TableCell>
        </>
      )
    }
    return (
    <>  
      
        <TableRow sx={{color:'black'}}>
              <TableCell >
              
                <Box sx={{display:'flex',alignItems:'center'}}>
                  <IconButton aria-label="add" color='error' sx={{color:'black'}} size='medium' onClick={()=>{removeItem(item.id)}} >
                    <ClearIcon />
                  </IconButton>
                  <Box sx={{}}>
                  <img src={item.img} alt={item.name} 
                      style={{display:'block',objectFit:'cover',height:'7vh'}}
                  />
                  </Box>
                  <Typography as={Link} to={`/item/${item.id}`} 
                    sx={{flex:1,fontSize:'1.2rem',textDecoration:'none',':hover':{color:'black'}}} 
                    variant="h5" color="black">
                    {item.name}
                  </Typography>
                </Box>
              
              </TableCell>
              <TableCell >
              <Typography sx={{fontSize:'1rem'}} variant="h6" color="black">$ {item.price}</Typography>
              </TableCell>
              <TableCell sx={{fontSize:'1rem'}}>
                <ButtonCount initial={cartQuantity} stock={item.stock} productCart={item} setter={setCartQuantity}/>
              </TableCell>
              <TableCell sx={{fontSize:'1rem'}}>
                <Typography sx={{fontSize:'1rem'}} variant="h6" color="black">$ {calculatePrice(item.price,cartQuantity)}</Typography>
              </TableCell>
            </TableRow>
    </>
    );
}
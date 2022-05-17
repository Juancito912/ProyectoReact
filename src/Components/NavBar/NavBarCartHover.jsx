import React, { useContext } from "react";
import {Typography,Box,Divider,Container} from '@mui/material'
import { Context } from "../../Context/CartContext";

export default function NavBarCartHover(){
    const {carrito} = useContext(Context);
    let total = 0;
    for (const obj of carrito) {
        total += obj.quantity*obj.price;
  }
    if(carrito.length === 0){
        return (
            <>
                <Box sx={{p:2,maxWidth:250}}>
                    <Typography variant="h6" color="black" textAlign="center" sx={{mb:2,fontSize:'1.2rem'}}> TU CARRITO ESTÁ VACÍO...</Typography>
                    <Typography variant="h5" color="black" textAlign="center" sx={{mb:2,fontSize:'1rem'}}> Todavia no agregaste nada </Typography>
                </Box>
                
            </>
        )
    }
    return (
        <>
        <Box sx={{p:1}}>
            <Typography variant="h6" color="black" textAlign="center">Carrito de Compras</Typography>
        {carrito.map((item)=>(
            <Box key={item.id}>
                <Divider orientation="vertical"/>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Box sx={{}}>
                    <img src={item.img} alt={item.name} 
                        style={{display:'block',objectFit:'cover',height:'7vh'}}
                    />
                    </Box>
                    <Container>
                        <Typography 
                        sx={{flex:1,fontSize:'1rem',textDecoration:'none',':hover':{color:'black'}}} 
                        variant="h6" color="black">
                        {item.name}
                        </Typography>
                        <Typography  
                        sx={{flex:1,fontSize:'0.9rem',textDecoration:'none',':hover':{color:'black'}}} 
                        variant="h5" color="black">
                        Precio: $ {item.price} x {item.quantity}
                        </Typography>
                        <Typography  
                        sx={{flex:1,fontSize:'0.9rem',textDecoration:'none',':hover':{color:'black'}}} 
                        variant="h5" color="black">
                        Subtotal: $ {item.price*item.quantity}
                        </Typography>
                    </Container>
                </Box>
                <Divider/>
            </Box>
            ))}
            
            <Typography variant="body1" color="initial" sx={{ width: '100%', bgcolor: 'background.paper' ,flexDirection:'column',pt:1,pl:1}}>
                <strong>Total</strong>: $ {total} + I.V.A:21% = $ {total+total*0.21}
            </Typography>
        </Box>
        </>
    )
}
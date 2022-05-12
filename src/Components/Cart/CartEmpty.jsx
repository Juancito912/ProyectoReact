import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CartEmpty(){
    return (
    <>

    <Box sx={{alignItems:'center',display:'flex',flexDirection:'column',mb:2}}>
        <Typography variant="h6" color="black" textAlign="center" sx={{mb:2}}> No hay nada por aqui</Typography>
        <Button as={Link} variant='contained' color='error' to={'/allProducts'}
            sx={{':hover':{color:'black'},textDecoration:'none'}}
        >
            Ver los productos
        </Button>
    </Box> 
        
    </>
    )
}
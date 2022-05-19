import React from "react";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system";

export default function Formfinish ({id}){

    return (
        <>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',m:5}}>
                <Typography variant="h5" sx={{fontSize:'1.6rem'}} color="black">Muchas Gracias por su compra</Typography>
                <Typography variant="h5" color="black">Esperamos que haya sido de su agrado</Typography>
                <Typography variant="h5" color="black">Su codigo de compra es:</Typography>
                <Typography variant="h6" sx={{fontSize:'2rem',color:'#d50000'}} color="black">{id}</Typography>
                <Typography variant="h5" color="black">Con el va a poder retirar su pedido, realizar reclamos o intercambiar algun producto</Typography>
                
            </Box>
        </>
    )
}
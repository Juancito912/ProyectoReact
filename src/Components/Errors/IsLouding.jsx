import React from "react";
import LoopIcon from '@mui/icons-material/Loop';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function IsLouding(){
    // #F7941E naranja
    return (
    <>  
        <Container maxWidth="lg" sx={{display:"flex",flexDirection:'column',alignItems:'center'}}>
            <LoopIcon sx={{fontSize:150,color:'#ab000d',mb:1,mt:3}}/>
            <Typography variant="h4" color="#ab000d">Cargando...</Typography>
            <Typography variant="h5" color="black">Por favor, espere.</Typography>
        </Container>
        
            
    </>
    )
}
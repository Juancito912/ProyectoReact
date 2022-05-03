import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function NotFoundPage(){
    return (
    <>
        <Container maxWidth="lg" sx={{display:"flex",flexDirection:'column',alignItems:'center'}}>
            <ErrorIcon sx={{fontSize:150,color:'#7f0000'}}/>
            <Typography variant="h4" color="black">Pagina no encontrada</Typography>
        </Container>
        
    </>
    )
}
import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DotSpinner } from '@uiball/loaders';

export default function IsLouding(){
    // #F7941E naranja
    return (
    <>  
        
        <Container maxWidth="lg" sx={{display:"flex",flexDirection:'column',alignItems:'center',mt:{xs:2,sm:10},mb:{xs:2,sm:10}}}>
            <DotSpinner 
                size={150}
                speed={0.8} 
                color="black" 
                
            />
            <Typography variant="h4" sx={{m:2}} color="#ab000d">Cargando...</Typography>
            <Typography variant="h5" color="black">Por favor, espere.</Typography>
            </Container>  
        </>
    )
}
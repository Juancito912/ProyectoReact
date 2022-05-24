import React from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import {Divider, Link as LinkMui} from '@mui/material'
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Footer() {
    const info = {
        telephone: " +54 11 57260960 ",
        direcction: " 25 de mayo 267 9°no",
        email:" stefano.2000@hotmail.es",
        time: " Martes a Sabados: 7AM - 21PM",
        description:`Esta tienda crea líneas de ropa, zapatos y accesorios para ayudar a los atletas a dar siempre lo mejor.
        Entre funcionalidad y diseño,nuestros productos cuentan con soluciones tecnológicas para ofrecer amortiguación, ligereza y estabilidad.`
    }
    const theme = createTheme({
        typography: {
            fontFamily:'Times New Roman',
        },
    });
    return (
        <>  
        <Divider sx={{mt:0.5}}/>
        
            <Box component='footer' sx={{mt:'auto',display:'flex',pt:1,pb:1,flexDirection:{xs:"column",sm:"row"}}}>
            <ThemeProvider theme={theme}>
                    <Container maxWidth='xl'sx={{flex:1.5,display: 'flex',flexDirection: 'column', pb:{xs:2},pt:1}}>
                        <Typography variant="h3" color="black"
                            as={Link} to={'/'}
                            sx={{
                                fontSize:'2.2rem',
                                textDecoration: 'none',
                                display:'block',
                                ':hover': { color: 'black' },
                                color: 'black', mr: 1, pb:1,
                                
                            }}
                        >
                            CLOTHING STORE
                        </Typography>
                        <Typography variant="body1" color="black" sx={{pb:1,mt:1}}>
                            {info.description}
                        </Typography>
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:{xs:'space-evenly'}, alignItems:'center',pl:0,flexWrap:'wrap'}}>
                            <LinkMui sx={{borderRadius:'50%',bgcolor:'green',p:0.7,mr:1}} href="https://web.whatsapp.com/"><WhatsAppIcon fontSize="medium" sx={{color:'white'}}/></LinkMui>
                            <LinkMui sx={{borderRadius:'50%',bgcolor:'#3B5999',p:0.7,mr:1}} href="https://www.facebook.com/"><FacebookIcon fontSize="medium" sx={{color:'white'}}/> </LinkMui>
                            <LinkMui sx={{borderRadius:'50%',bgcolor:'#E4405F',p:0.7,mr:1}} href="https://www.instagram.com/"><InstagramIcon fontSize="medium" sx={{color:'white'}}/></LinkMui>
                            <LinkMui sx={{borderRadius:'50%',bgcolor:'#E60023',p:0.7}} href="https://ar.pinterest.com/"><PinterestIcon fontSize="medium" sx={{color:'white'}}/></LinkMui>
                        </Box>
                    </Container>
                    <Container maxWidth='xl' sx={{flex:1, display:'flex',flexDirection:'column',justifyContent:'space-around',width:{xs:'100%',sm:'90%'},pb:{xs:2}}}>
                    <Typography variant="h5" color="black" sx={{pb:2}}>Contacto</Typography>
                        
                        <Typography variant="subtitle1" component={'div'} sx={{mb:1.2}} color={'black'}><LocalPhoneIcon/>{info.telephone}</Typography>
                        <Typography variant="subtitle1" component={'div'} sx={{mb:1.2}} color={'black'}><RoomIcon/>{info.direcction}</Typography>
                        <Typography variant="subtitle1" component={'div'} sx={{mb:1.2}} color={'black'}><DraftsIcon/>{info.email}</Typography>
                        <Typography variant="subtitle1" component={'div'}  color={'black'}><AccessTimeFilledIcon/>{info.time}</Typography>
                    </Container>
                    <Container maxWidth='lg' sx={{flex:0.5,display:'flex',flexDirection:'column', justifyContent:'center',width:{xs:'100%'},mr:3}}>
                        <Box sx={{display:{xs:'none',sm:'block'}}}>
                        <Typography variant="h5" color="black" sx={{pb:2}}>Links Utiles</Typography>
                        <Typography as={Link} to={'/'} variant="subtitle1" component={'div'} sx={{mb:1.2,textDecoration:'none',':hover': { color: 'black' },display:'block'}} color={'black'}>Home</Typography>
                        <Typography as={Link} to={'/allProducts'} variant="subtitle1" component={'div'} sx={{mb:1.2,textDecoration:'none',':hover': { color: 'black' },display:'block'}} color={'black'}>Productos</Typography>
                        <Typography as={Link} to={'/cart'} variant="subtitle1" component={'div'} sx={{mb:1.2,textDecoration:'none',':hover': { color: 'black' },display:'block'}} color={'black'}>Carrito de Compras</Typography>
                        </Box>
                        
                    </Container>
                
                </ThemeProvider>
            </Box>
        </>
    );
}
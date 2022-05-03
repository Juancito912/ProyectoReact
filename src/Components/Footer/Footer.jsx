import React from "react";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import {Link as LinkMui} from '@mui/material'
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    const info = {
        telephone: " +54 11 57260960 ",
        direcction: " 25 de mayo 267 9°no",
        email:" stefano.2000@hotmail.es",
        time: " Martes a Sabados: 7AM - 21PM",
        description:`Esta tienda crea líneas de ropa, zapatos y accesorios para ayudar a los atletas a dar siempre lo mejor.
        Entre funcionalidad y diseño,nuestros productos cuentan con soluciones tecnológicas para ofrecer amortiguación, ligereza y estabilidad.`
    }   
    return (
        <>  
            <footer sx={{clear:'both'}}>
                <Box bgcolor={'#212121'} sx={{display:'flex',mt:0.5,pt:1,flexDirection:{xs:"column",sm:"row"}}} >
                    <Container maxWidth='xl'sx={{pb:{xs:2}}}>
                        <Typography variant="h4" color="white" textAlign={'center'}
                            as={Link} to={'/'}
                            sx={{
                                textDecoration: 'none',
                                display:'block',
                                ':hover': { color: 'white' },
                                color: 'white', mr: 1, pb:1
                            }}
                        >
                            Chothing Store
                        </Typography>
                        <Typography textAlign={'center'} variant="body2" color="white" sx={{pb:1}}>
                            {info.description}
                        </Typography>
                    </Container>
                    <Container maxWidth='xl' sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:{xs:'100%',sm:'90%'},pb:{xs:2}}}>
                        <Typography variant="subtitle1" component={'div'} color={'white'}><LocalPhoneIcon/>{info.telephone}</Typography>
                        <Typography variant="subtitle1" component={'div'} color={'white'}><HomeIcon/>{info.direcction}</Typography>
                        <Typography variant="subtitle1" component={'div'} color={'white'}><DraftsIcon/>{info.email}</Typography>
                        <Typography variant="subtitle1" component={'div'} color={'white'}><AccessTimeFilledIcon/>{info.time}</Typography>
                    </Container>
                    <Container maxWidth='lg' sx={{display:'flex',flexDirection:'column', justifyContent:'center',width:{xs:'100%',md:'40%'},mr:3}}>
                        <Typography variant="h6" color="white" textAlign={'center'} sx={{pb:2}}>Nuestras redes</Typography>
                        <Container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                            <LinkMui href="https://web.whatsapp.com/"><WhatsAppIcon fontSize="large" sx={{color:'green'}}/></LinkMui>
                            <LinkMui href="https://www.facebook.com/"><FacebookIcon fontSize="large" sx={{color:'blue'}}/> </LinkMui>
                            <LinkMui href="https://www.instagram.com/"><InstagramIcon fontSize="large" sx={{color:'indigo'}}/></LinkMui>
                        </Container>
                    </Container>
                </Box>
            </footer>
        </>
    );
}
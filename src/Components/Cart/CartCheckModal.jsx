import React, { useContext } from "react";
import { Box, Button, Divider, Modal,Typography ,Container} from "@mui/material";
import { Context } from "../../Context/CartContext";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";

export default function CartCheckModal(props){
  const {carrito} = useContext(Context);

    const style = {
        color: 'dark',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs:330,sm:500},
        bgcolor: 'white',
        border: '1px solid #000',
        boxShadow: 24,
        p: 2,
    };

    return (
            <Modal
            {...props}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
              <Typography variant="h6" sx={{fontSize:'1.6rem',textDecoration:'underline'}} color="black" textAlign='center'>Confirmar Carrito</Typography>
              {carrito.map((item)=>(
            <Box key={item.id}>
                <Divider orientation="vertical"/>
                <Box sx={{display:'flex',alignItems:'center',pt:1,pb:1}}>
                    <Box>
                    <img src={item.img} alt={item.name} 
                        style={{display:'block',objectFit:'cover',height:'7vh'}}
                    />
                    </Box>
                    <Container sx={{alignItems:'center',display:'flex'}}>
                        <Typography 
                        sx={{flex:1,fontSize:'1rem',':hover':{color:'black'}}} 
                        variant="h6" color="black">
                        {item.name}
                        </Typography>
                        <Box sx={{flex:1.5}}>
                        <Typography  
                        sx={{fontSize:'0.9rem',textDecoration:'none',':hover':{color:'black'}}} 
                        variant="h5" color="black">
                        <strong>{item.quantity} Unidades x ${item.price}.</strong>
                        </Typography>
                        <Typography  
                        sx={{fontSize:'0.9rem',textDecoration:'none',':hover':{color:'black'}}} 
                        variant="h5" color="black">
                        <strong>Subtotal: ${item.price*item.quantity}.</strong> 
                        </Typography>
                        </Box>
                    </Container>
                </Box>
                <Divider/>
            </Box>
            ))}
            <CartTotal Xs/>
            <Container sx={{display:'flex',justifyContent:'center'}}>
              <Button sx={{mr:2}} variant="contained" color="error" onClick={()=>{props.onClose()}}>
                Seguir comprando
              </Button>
              <Button as={Link} to={'/form'} sx={{display:'inline-flex',justifyContent:'center',alignItems:'center',p:1.1,textDecoration:'none',':hover':{color:'black'}}} variant="contained" color="success">
                Confirmar
              </Button>
            </Container>
            </Box>
          </Modal>
        
    )
}
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CartContext";
import { Box, Button, Divider, Modal,Typography } from "@mui/material";

export default function ButtonCountModal(props) {
    const product = props.product;    

    const style = {
        color: 'dark',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs:320,sm:500},
        bgcolor: 'white',
        border: '1px solid #000',
        boxShadow: 24,
        p: 3,
    };

    let {addItem,findInCart,setQuantityItem} = useContext(Context);
    return (
        <Modal
        {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{mb:1}}>
            ¿Desea agregar este producto al carrito?
          </Typography>
          
          <Divider/>
          <Typography id="modal-modal-title" variant="h6" component="h3" sx={{mt:1}}>
            {product.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Precio Total:</strong>  $ {product.price} x {props.quantity} unidades = $ {product.price*props.quantity}.
          </Typography>
          <Box sx={{mt:1}}>
              <Button color="error" variant="contained" sx={{mr:2,':hover':{color:'black'}}} onClick={()=>{props.onClose()}}>Cancelar</Button>
              <Button as={Link} to={'/cart'} 
                color="success" variant="contained" 
                sx={{p:1.15,textDecoration:'none',':hover':{color:'black'},fontSize:14}} 
                size='large' onClick={()=>{findInCart(product.id) !== -1 ?setQuantityItem(product.id,props.quantity) :addItem(product,props.quantity)}}>
                Aceptar
              </Button>
              
          </Box>
        </Box>
      </Modal>
    )
}
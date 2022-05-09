import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CartContext";
import { Box, Button, Container, Modal,Typography } from "@mui/material";

export default function ItemCartModal(props) {
    const product = props.product;    

    const style = {
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'rgb(0, 30, 60)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    let {addItem} = useContext(Context);
    return (
        <Modal
        {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            ¿Desea agregar este producto al carrito?
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h3" sx={{mt:1}}>
            {product.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <strong>Precio Total:</strong>  $ {product.price} x {props.quantity} unidades = $ {product.price*props.quantity}.
          </Typography>
          <Box sx={{mt:1}}>
              <Button sx={{bgcolor:'black',color:'white',mr:2}} onClick={()=>{props.onClose()}}>Cancelar</Button>
              <Button as={Link} to={'/cart'} sx={{p:1.1,bgcolor:'black',color:'white',textDecoration:'none',':hover':{color:'white'}}} 
                size='large' onClick={()=>{addItem(product,props.quantity)}}>
                Aceptar</Button>
          </Box>
        </Box>
      </Modal>
    )
    
   
    // return (
    //     <>
    //     <Modal
    //     {...props}
    //     size="lg"
    //     aria-labelledby="contained-modal-title-vcenter"
    //     centered
    //   >
    //     <Modal.Header closeButton>
    //       <Modal.Title id="contained-modal-title-vcenter">
    //       ¿Quiere agregar este producto al carrito?
    //       </Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //         <h4>{props.product.name}</h4>
    //         <p>{props.quantity} unidades x $ {props.product.price} = $ {props.product.price*props.quantity} </p>
    //     </Modal.Body>
    //     <Modal.Footer>
    //         <Button variant="dark" onClick={props.onHide}>
    //             {/* <Link className={styles.link} to={`/item/${props.product.id}`}>Disagree</Link>  */}
    //             Disagree
    //         </Button>
    //         <Button variant="dark" onClick={()=> {addItem(props.product,props.quantity)}}>
    //             <Link className={styles.link} to={'/cart'}>Add Cart</Link> 
    //         </Button>
    //     </Modal.Footer>
    //   </Modal>
    //     </>
      
    // );
}
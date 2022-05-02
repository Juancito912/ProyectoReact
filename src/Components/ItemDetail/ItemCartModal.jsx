import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CartContext";
import styles from './ItemDetail.module.css'
export default function ItemCartModal(props) {
    let {addItem} = useContext(Context);
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
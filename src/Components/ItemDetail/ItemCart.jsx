import React, { useState } from "react";
import ItemCartModal from "./ItemCartModal";
// import styles from './ItemDetail.module.css'

export default function ItemCart({product,quantity}){
    const [modalShow,setModalShow] = useState(false);
    return (
    <>
        {/* <Button variant="outline-danger" onClick={()=> setModalShow(true)} size='lg' className='mt-3 pb-2'>
            Terminar Compra
        </Button>
        <ItemCartModal show ={modalShow}
        onHide ={()=> setModalShow(false)}
        product = {product}
        quantity = {quantity}
        /> */}
        
    </>
    );
}
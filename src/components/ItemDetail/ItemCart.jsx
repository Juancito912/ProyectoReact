import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './ItemDetail.module.css'

export default function ItemCart(){
    return (
    <>
        <Button variant="outline-danger" size='lg' className='mt-3 pb-2'>
            <Link className={styles.link} to={'/cart'}>Terminar Compra</Link> 
        </Button>
        
    </>
    )
}
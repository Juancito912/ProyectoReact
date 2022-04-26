import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { Button } from 'react-bootstrap';


export default function CartWidget() {
    return (
    <>
        <Button variant="dark"><FaShoppingCart color='white' className='fs-4'/></Button> 
    </>
    );
}
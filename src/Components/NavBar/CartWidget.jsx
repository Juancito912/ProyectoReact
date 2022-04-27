import React, { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Context } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget() {
    let {carrito} = useContext(Context);
    return (
    <>
        <div>
            <Button variant="dark"><Link to={'/cart'}><FaShoppingCart color='white' className='fs-4'/></Link></Button> 
            <span className='text-white'>({carrito.length})</span>
        </div>
        
    </>
    );
}
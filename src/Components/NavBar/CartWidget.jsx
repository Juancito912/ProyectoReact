import React, { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Context } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


export default function CartWidget() {
    let {carrito} = useContext(Context);
    let cantProducts = 0;
    for(let product of carrito){
        cantProducts += product.quantity;
    }
    return (
    <>
        <div>
            <Button variant="dark"><Link to={'/cart'}><FaShoppingCart color='white' className='fs-4'/></Link></Button> 
            {/* <span className='text-white'>{(cantProducts === 0)?null:(cantProducts)}</span> anda tmb*/}
            <span className='text-white' style={{display: (cantProducts === 0)? 'none':'inline-block'}}>{cantProducts}</span>
        </div>
        
    </>
    );
}
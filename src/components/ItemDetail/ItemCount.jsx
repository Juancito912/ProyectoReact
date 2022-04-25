import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {IoMdAddCircle,IoMdRemoveCircle} from "react-icons/io";

export default function ItemCount({initial,stock,onAdd}) {

    const [cant,setCant] = useState(initial);
    let x=cant;
    
    return (
    <>
        <div>
            <Button variant="danger" size="md"  onClick ={()=>{
                    if(cant === 1){
                        setCant(1);
                        x=1;
                    }else{setCant(--x);}
                    
                }}> <IoMdRemoveCircle className='mb-1'/>
            </Button>
                <span className='pe-2 ps-2'>{x}</span>
            <Button variant="danger" size="md" onClick={()=>{
                    if(cant === stock){
                        setCant(stock);
                        x=stock;
                        alert("No hay mas stock");
                    }else{setCant(++x);}
                    
                }}> <IoMdAddCircle className='mb-1'/> 
            </Button>
        </div>
        
        <Button variant="outline-danger" size='lg' className='mt-3 pb-2' onClick={()=> {onAdd(x)}}>
            Agregar al Carrito
        </Button>
        
    </>
    );
}
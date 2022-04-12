import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import {IoMdAddCircle,IoMdRemoveCircle} from "react-icons/io";


export default function ItemCount({initial,stock}) {

    const [cant,setCant] = useState(initial);
    let x=cant;
    
    return (
    <>
        <div>
            <Button variant="danger" size="sm" onClick ={()=>{
                    if(cant === 1){
                        setCant(1);
                        x=1;
                    }else{setCant(--x);}
                    
                }}> <IoMdRemoveCircle/>
            </Button>
                <span className='pe-2 ps-2'>{x}</span>
            <Button variant="danger" size="sm" onClick={()=>{
                    if(cant === stock){
                        setCant(stock);
                        x=stock;
                        alert("No hay mas stock");
                    }else{setCant(++x);}
                    
                }}> <IoMdAddCircle/> 
            </Button>
        </div>
        
        <Button variant="outline-danger" size='lg' className='mt-3' onClick={()=> {
                alert(`Compro ${x} productos`)
            }}>Agregar al Carrito
        </Button>
        
    </>
    );
}
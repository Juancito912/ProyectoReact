import React, { useContext } from "react";
import { Context } from "../../Context/CartContext";

export default function Cart({item}){
    let {removeItem} = useContext(Context);
    return (
    <>  
        {/* <tr>
            <td><img style={{height:'15vh',width: '10rem'}} src={item.img} alt={item.name} /></td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${item.price*item.quantity}</td>
            <td><Button onClick={()=>{removeItem(item.id)}}>Eliminar Producto</Button></td>
        </tr> */}
    </>
    );
}
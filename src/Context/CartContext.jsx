import React, { useState,createContext } from "react";

export const Context = createContext();
function CartContext({children}){

    const [carrito,setCarrito] = useState([]);
    const IsThereStock = (item)=>{
        if(item.quantity > item.stock){
            item.quantity = item.stock;
            alert(`El stock disponible de este producto es de ${item.stock} Unidades`)
            return false;
        }
        return true;
    }
    const addItem = (item, quantity) =>{
        let index = findInCart(item.id);
        if(index !== -1){
            carrito[index].quantity += quantity;
            IsThereStock(carrito[index]);
            setCarrito(carrito);
        }else{
            item.quantity = quantity;
            setCarrito([...carrito,item]);
        }
        
    }

    const removeItem = (itemId) => {
        let carritoFiltrado = carrito.filter(obj => obj.id !== itemId);
        setCarrito(carritoFiltrado);
    }
    const clear = () => {
        setCarrito([]);
    }

    const findInCart = (itemId) => {
        return carrito.findIndex(obj => obj.id === itemId);
    }

    return (
        <>
        <Context.Provider value={{carrito,setCarrito,addItem,removeItem,clear,findInCart}}>{children}</Context.Provider>
            
        </>
    )
}

export default CartContext;
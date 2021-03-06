import React, { useState,createContext } from "react";

export const Context = createContext();
function CartContext({children}){

    const [totalQuantity,setTotalQuantity] = useState(0);

    const getItemsStorage = () =>{
        let cart = [];
        for(let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            let item = JSON.parse(value);
            cart.push(item);
        }
        return cart;
    }
    const [carrito,setCarrito] = useState(localStorage.length< 0 ? []: getItemsStorage());

    const getQuantity = () => {
        let cantProducts = 0;
        for (let item of carrito) {
            cantProducts += item.quantity;
        }
        setTotalQuantity(cantProducts);
        
    }
    

    const setQuantityItem = (id,qty) =>{
        let index = findInCart(id);
        carrito[index].quantity = qty;
        setCarrito(carrito);
        localStorage.setItem(id,JSON.stringify(carrito[index]));
        getQuantity();
    }
    
    const addItem = (item, quantity) =>{
        
        item.quantity = quantity;
            setCarrito([...carrito,item]);
            localStorage.setItem(item.id,JSON.stringify(item));
        getQuantity();
    }

    const removeItem = (itemId) => {
        let carritoFiltrado = carrito.filter(obj => obj.id !== itemId);
        setCarrito(carritoFiltrado);
        localStorage.removeItem(itemId);
        getQuantity();
    }

    const clear = () => {
        setCarrito([]);
        localStorage.clear();
        getQuantity();
    }

    const getQuantityItem = (id) =>{
        let itemFiltrado = carrito.find(obj => obj.id === id);
        return itemFiltrado.quantity;
    }

    const findInCart = (itemId) => {
        return carrito.findIndex(obj => obj.id === itemId);
    }
    const getTotal= ()=>{
        let total = 0;
        for (const obj of carrito) {
            total += obj.quantity*obj.price;
        }
        return total;
    }
    const packCart = () =>{
        let pack =[] ;
        
        for (const item of carrito) {

            pack.push({id:item.id,
                name:item.name,
                price:item.price,
                quantity:item.quantity,
                stockNuevo:item.stock-item.quantity,
                })
        }
        return pack;
    }
    return (
        <>
        <Context.Provider value={{getQuantity,carrito,setCarrito,addItem,
        removeItem,clear,findInCart,totalQuantity,setTotalQuantity,
        setQuantityItem,getQuantityItem,getTotal,packCart,
        }}
        >
            {children}
        </Context.Provider>
        </>
    )
}

export default CartContext;
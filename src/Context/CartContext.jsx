import React, { useState,createContext } from "react";

export const Context = createContext();
function CartContext({children}){

    const [carrito,setCarrito] = useState([]);
    const [totalQuantity,setTotalQuantity] = useState(0);

    const IsThereStock = (item)=>{
        if(item.quantity > item.stock){
            item.quantity = item.stock;
            alert(`El stock disponible de este producto es de ${item.stock} Unidades`)
            return false;
        }
        return true;
    }
    const getQuantity = () => {
        let cantProducts = 0;
        for (let item of carrito) {
            cantProducts += item.quantity;
        }
        setTotalQuantity(cantProducts);
        console.log("hice get")
    }

    const setQuantityItem = (id,qty) =>{
        let index = findInCart(id);
        carrito[index].quantity = qty;
        setCarrito(carrito);
        getQuantity();
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
        getQuantity();
    }

    const removeItem = (itemId) => {
        let carritoFiltrado = carrito.filter(obj => obj.id !== itemId);
        setCarrito(carritoFiltrado);
        getQuantity();
    }

    const clear = () => {
        setCarrito([]);
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
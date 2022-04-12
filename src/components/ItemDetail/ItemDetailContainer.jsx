import React,{ useEffect, useState} from 'react';
import { getItem } from '../../Utils/products';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [product, setProduct]= useState({});
    useEffect(() => {
        getItem()
            .then((res) => {
                setProduct(res);
            })
    }, []);
    
    return (
        <>
            <ItemDetail product = {product}/>
        </>
    );
}
import React, {useEffect,useState} from 'react';
import { getProducts } from '../../Utils/products';
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [productos,setProductos] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProductos(res);
            })
    }, []);
    
    return (
    <>
        <ItemList items={productos}/>
    </>
    );
}
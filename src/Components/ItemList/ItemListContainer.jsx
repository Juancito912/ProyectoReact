import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProductsCategory } from '../../Utils/products';
import IsLouding from '../Errors/IsLouding';
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [productos,setProductos] = useState([]);
    const [isLouding,setIsLouding] = useState(true);

    const categoryid = useParams();
    
    useEffect(() => {
        setIsLouding(true);
        
        getProductsCategory(categoryid.categoryid)
            .then(res =>{
                setProductos(res);
                setIsLouding(false);
            });
        
    }, [categoryid]);
    
    
    return (
        <>
        {/* {(IsLouding) && <IsLouding/>} */}
        {isLouding? <IsLouding/> : <ItemList items={productos}/>}
        </>
    );
}
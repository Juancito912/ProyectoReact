 import React,{ useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../Utils/Getproducts';
import IsLouding from '../Errors/IsLouding';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [product, setProduct]= useState({});
    const [isLouding,setIsLouding] = useState(true);

    const {productId} = useParams();
    useEffect(() => {
        setIsLouding(true);
        getItem(parseInt(productId))
            .then((res) => {
                setProduct(res);
                setIsLouding(false);
            })
    }, [productId]);
    
    return (
        <>
        {isLouding? <IsLouding/> : <ItemDetail product = {product}/>}
        </>
    );
}
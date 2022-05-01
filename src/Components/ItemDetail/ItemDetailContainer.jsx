 import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React,{ useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../Utils/Products';
import IsLouding from '../Errors/IsLouding';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [product, setProduct]= useState({});
    const [isLouding,setIsLouding] = useState(true);

    const {productId} = useParams();
    useEffect(() => {
        setIsLouding(true);
        const db = getFirestore();

        const productRef = doc(db,"Productos",productId);
        getDoc(productRef).then((res)=>{
            setProduct({id: res.id,...res.data()});
            setIsLouding(false);
        })
    }, [productId]);
    
    return (
        <>
        {isLouding? <IsLouding/> : <ItemDetail product = {product}/>}
        </>
    );
}
 import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React,{ useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import IsLouding from '../Errors/IsLouding';
import ItemDetail from './ItemDetail';
import Error404 from '../Errors/Error404';

export default function ItemDetailContainer() {
    const [product, setProduct]= useState({});
    const [isLouding,setIsLouding] = useState(true);
    const [isFailing,setIsFailing] = useState(false);

    const {productId} = useParams();
    useEffect(() => {
        setIsLouding(true);
        const db = getFirestore();

        const productRef = doc(db,"Productos",productId);
        getDoc(productRef).then((res)=>{
            setProduct({id: res.id,...res.data()});
            setIsFailing(false);
            })
            .catch((err)=>{
                setIsFailing(true);
            })
            .finally(()=> {
                setIsLouding(false);
            })
    }, [productId]);
    
    return (
        <>
        {(isLouding) && <IsLouding/>}
        {(isFailing) && <Error404/>}
        {!(isLouding)&& !(isFailing) && <ItemDetail product={product}/>}
        </>
    );
}
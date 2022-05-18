import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Error404 from '../Errors/Error404';
import IsLouding from '../Errors/IsLouding';
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [productos,setProductos] = useState([]);
    const [isLouding,setIsLouding] = useState(true);
    const [isFailing,setIsFailing] = useState(false);

    const {categoryid} = useParams();
    useEffect(() => {
        setIsLouding(true);
        setIsFailing(false);

        const db = getFirestore();
        console.log(categoryid);
        let productsRef;
        if(!categoryid){
            productsRef = collection(db,'Productos');
        }else {
            productsRef = query(collection(db,'Productos'),where('categoryId','==',categoryid));
        
        }

        getDocs(productsRef).then((res)=>{
            setProductos(res.docs.map((item) =>({id:item.id,...item.data()}))); 
            setIsFailing(false);
            })
            .catch((err) =>{
                console.log(err);
                setIsFailing(true);
            })
            .finally(() =>{
                setIsLouding(false);
            })
        
    }, [categoryid]);

    return (
        <>
        {(isLouding) && <IsLouding/>}
        {(isFailing) && <Error404/>}
        {!(isLouding)&& !(isFailing) && <ItemList items={productos}/>}
        
        </>
    );
}
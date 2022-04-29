import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
// import { getProducts, getProductsCategory } from '../../Utils/Getproducts';
import IsLouding from '../Errors/IsLouding';
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [productos,setProductos] = useState([]);
    const [isLouding,setIsLouding] = useState(true);

    const categoryid = useParams();
    useEffect(() => {
        setIsLouding(true);
        const db = getFirestore();
        const productsRef = collection(db,'Productos');
        getDocs(productsRef).then((res)=>{
            setProductos(res.docs.map({id:res.id,...res.data()}));
        })
        // getProductsCategory(categoryid.categoryid)
        //     .then(res =>{
        //         setProductos(res);
        //         setIsLouding(false);
        //     });

        // setProductos(getProducts());
        
    }, []);

    return (
        <>
        {/* {(IsLouding) && <IsLouding/>} */}
        {isLouding? <IsLouding/> : <ItemList items={productos}/>}
        </>
    );
}
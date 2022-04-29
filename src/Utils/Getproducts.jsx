import { getFirestore } from 'firebase/firestore';
import { collection,getDocs } from 'firebase/firestore';
const db = getFirestore();
const GetProducts = () => {
    
    let products = [];
    const itemsCollection = collection(db,"Productos");
    getDocs(itemsCollection)
        .then((res) =>{
            products = res.docs.map((e) => ({id:e.id,...e.data()}));
        })
    return products;
}
let products = GetProducts();

export const getProducts = () => {
    return products;
}

export const getProductsCategory = (category) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(category){
                let array = products.filter(obj => obj.categoryId === category);
                resolve(array);
            }else{
                resolve(products);
            }
        },2000);
    });
}

export const getItem = (productId) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let product = products.find(e => e.id=== productId);
            console.log(product);
            resolve(product);
        },2000);
    });
}
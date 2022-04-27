const products = [
    { 
        id:0, 
        name:"Remera Negra",
        description:"El material Heathertech ofrece una sensación cómoda",
        stock:5,
        price:100,
        img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/700x538.46153846154/9df78eab33525d08d6e5fb8d27136e95/w/t/wt11190bk_40_2.jpg",
        category:'Remeras'
    },
    { 
        id:1, 
        name:"Campera Rosa",
        description:"Capucha con cordón elástico",
        stock:4,
        price:150,
        
        category:'Camperas',
        img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/w/j/wj83506psa_40.jpg" 
    },
    { 
        id:2, 
        name:"Pantalon Deportivo Negro", 
        description:"Material tejido de nylon duradero",
        price:200,
        stock:10,
        
        category:'Pantalones',
        img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/700x538.46153846154/9df78eab33525d08d6e5fb8d27136e95/p/a/pantalon-hombre-new-balance-athletics-wind-pant-mp11500bk_1.jpg" 
    },
    { 
        id:3, 
        name:"Buzo negro", 
        description:`La tela de felpa francesa de algodón `,
        price:250,
        stock:8,
        
        category:'Camperas',
        img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/700x538.46153846154/9df78eab33525d08d6e5fb8d27136e95/m/t/mt11514bk_nb_70_i.jpg" 
    },
    { 
        id:4, 
        name:"Musculosa", 
        description:"Material: 87% Poliéster y 13% Lycra",
        price:120,
        stock:6,
        
        category:'Remeras',
        img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/700x538.46153846154/9df78eab33525d08d6e5fb8d27136e95/w/t/wt63102bk_40_1.jpg" 
    },
    { 
        id:5, 
        name:"Medias", 
        description:"Plantilla acolchada que brinda comodidad durante todo el dia",
        price:50,
        stock:12,
        category:'Medias',
        img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/image/700x538.46153846154/9df78eab33525d08d6e5fb8d27136e95/n/5/n5040800bk_nb_04_i_2.jpeg" 
    }
];

export const getProducts = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products);
        },2000);
    });
}

export const getProductsCategory = (category) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(category){
                let array = products.filter(obj => obj.category === category);
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
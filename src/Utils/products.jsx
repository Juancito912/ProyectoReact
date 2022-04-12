const products = [
    { 
        id:0, 
        name:"Camisa",
        description:"Comoda",
        stock:5,
        price:100,
        img:"https://i.pinimg.com/736x/1a/30/ba/1a30bafc0af4e1000c49f63170645926.jpg" 
    },
    { 
        id:1, 
        name:"Campera",
        description:"Ajustada",
        stock:4,
        price:150,
        img:"https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/w/j/wj83506psa_40.jpg" 
    },
    { 
        id:2, 
        name:"Pantalon", 
        description:"Grande",
        price:200,
        stock:10,
        img:"https://media.vogue.es/photos/5cc7367ffdc82261481fda65/master/w_2500,h_3194,c_limit/pantalones_vaqueros_mom_jeans_goma_pull_bear_basico_armario_2019_7512.jpg" 
    }
];

export const getProducts = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products);
        },2000);
    });
}

export const getItem = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products[0]);
        },2000);
    });
}
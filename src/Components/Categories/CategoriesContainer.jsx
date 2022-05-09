import React from "react";
import Categories from "./Categories";
import { Box } from "@mui/material";

const images = [
    {
        url: 'https://www.alertadigital.com/wp-content/uploads/2019/08/accesorios-deportivos-670x444.jpg',
        title: 'Ver Todos los Productos',
        width:'100%',height:'33vh',link:'/allProducts'
      },
    {
      url: 'https://www.runningcorrer.com.ar/wprunning/wp-content/uploads/2021/01/adidas-Running-UltraBOOST21-8.jpg',
      title: 'Zapatillas',
      width:'33.33333333%',height:'60vh',link:'/category/Zapatillas'
    },
    {
      url: 'https://img.pe.class.posot.com/es_pe/2019/04/07/Medias-Deportivas-20190407030011.jpg',
      title: 'Medias',
      width:'33.33333333%', height:'60vh',link:'/category/Medias'
    },
    {
      url: 'https://falabella.scene7.com/is/image/FalabellaAR/881611451_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70',
      title: 'Remeras',
      width:'33.33333333%', height:'60vh',link:'/category/Remeras'
    },
    {
        url: 'https://static.wixstatic.com/media/632730_43be0aa3dad74182a586637d2d150cda~mv2.png/v1/fill/w_498,h_498,al_c,usm_0.66_1.00_0.01/632730_43be0aa3dad74182a586637d2d150cda~mv2.png',
        title: 'Accesorios',
        width:'33.33333333%', height:'60vh',link:'/category/Accesorios'
    },
    {
        url: 'https://falabella.scene7.com/is/image/FalabellaAR/3111959_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70',
        title: 'Pantalones',
        width:'33.33333333%', height:'60vh',link:'/category/Pantalones'
    },
    {
        url: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/822/products/campera_negra-11-b859f294564d933d4016218687366908-1024-1024.png',
        title: 'Camperas',
        width:'33.33333333%', height:'60vh',link:'/category/Camperas'
    }
];

export default function CategoriesContainer (){
    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                {images.map((img) =>(<Categories key={img.title} image={img}/>))}
            </Box>
        </>
    )
    
}
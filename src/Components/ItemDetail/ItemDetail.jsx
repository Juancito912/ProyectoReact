import React, { useContext, useState } from 'react';
import ButtonCount from '../ButtonCount/ButtonCount';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { Box } from '@mui/material';
import { Context } from '../../Context/CartContext';

export default function ItemDetail({product}) {
    const {findInCart,carrito} = useContext(Context);
    const [unidad,setUnidad] = useState(findInCart(product.id) !== -1?carrito[findInCart(product.id)].quantity:0);
    const onAdd = (x)=> {
        setUnidad(x);
    }
    
    return (
    <>
        
        <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'},pt:2}}>
            <Container sx={{flex:1.5}}>
                <img src={product.img} alt={product.name} 
                style={{width:'100%',display:'block',objectFit:'cover',height:'70vh'}}
                />
            </Container>
            <Container sx={{flex:1,display:'flex',flexDirection:'column',alignItems:{xs:'center',sm:'flex-start'},p:{xs:2,sm:0}}}>
                <Typography variant='h5' component={'div'} sx={{fontSize:'2.2rem',mb:2}}>{product.name}</Typography>
                
                <Typography variant='body1' component={'p'} sx={{}}>{product.description}</Typography>
                <Typography variant='h6' component={'p'} sx={{fontSize:'1.7rem',color:'#bf360c'}}>$ {product.price}</Typography>
                <Typography variant="body1" color="text.secondary">
                    Cantidades elejidas: <strong>{unidad} Unidades</strong>.
                    </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Stock Disponible: <strong> {product.stock} unidades.</strong>
                </Typography>
                <ButtonCount showAddCart initial={findInCart(product.id) !== -1?carrito[findInCart(product.id)].quantity:1} stock={product.stock} onAdd={onAdd} product={product}/>
            </Container>
            
        </Box>
        
    </>
    );
}
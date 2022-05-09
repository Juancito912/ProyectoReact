import React, { useState ,useEffect} from 'react';
import ItemCount from './ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { Box } from '@mui/material';
import { Image } from '@mui/icons-material';

export default function ItemDetail({product}) {
    const [unidad,setUnidad] = useState(0);
    const onAdd = (x)=> {
        setUnidad(x);
    }
    
    return (
    <>
        {/* <Card sx={{ maxWidth: '100%',display:'flex',flexDirection:'row' }}>
            <CardMedia
                component="img"
                height="300"
                image={product.img}
                alt={product.name}
            />
            <Container>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    {product.description}.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    Cantidad: <strong>{unidad} Unidades</strong>.
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                    Stock Disponible: <strong> {product.stock} unidades.</strong>
                    </Typography>
                </CardContent>
                <CardActions>
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} product={product}/>
                </CardActions>
                </Container>
        </Card> */}
        <Box sx={{display:'flex',flexDirection:'row',pt:2}}>
            <Container sx={{flex:1}}>
                <img src={product.img} alt={product.name} 
                style={{width:'100%',display:'block',objectFit:'cover',height:'70vh'}}
                />
            </Container>
            <Container sx={{flex:1}}>
                <Typography variant='h5' component={'p'} sx={{fontSize:'2.2rem',mb:2}}>{product.name}</Typography>
                <Typography variant='body1' component={'p'} sx={{}}>{product.description}</Typography>
                <Typography variant='h6' component={'p'} sx={{fontSize:'1.7rem',color:'#bf360c'}}>$ {product.price}</Typography>
                <Typography variant="body1" color="text.secondary">
                    Cantidades elejidas: <strong>{unidad} Unidades</strong>.
                    </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Stock Disponible: <strong> {product.stock} unidades.</strong>
                </Typography>
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} product={product}/>
            </Container>
            
        </Box>
        
    </>
    );
}
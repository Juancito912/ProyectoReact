import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

export default function Item({item}) {
    return (
        <>
        <Card sx={{m:0,maxWidth:350}}>
            <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.name}
                sx={{objectFit:'cover'}}
            />
            <CardContent sx={{bgcolor:'secondary',display:'flex',flexDirection:'column',alignItems:'center',pb:0,pt:1}}>
                <Typography variant="h5" sx={{fontSize:'1.5rem'}} component="div">
                    {item.name}
                </Typography>
                <Typography variant="h6" sx={{fontSize:'1.5rem' ,color:'#8e0000'}} component="div">
                    ${item.price}
                </Typography>
            </CardContent>
            <Divider variant="middle"/>
            <CardActions sx={{display:'flex',flexDirection:'row',justifyContent:'center',m:1}}>
                <Button variant='contained' color='primary' size="medium">Añadir al carrito</Button>
                <Button as={Link} to={`/item/${item.id}`} variant='contained' color='primary' size="medium"
                sx={{textDecoration:'none', color:'white',ml:2,':hover':{color:'white'}}}>
                    Ver mas
                </Button>
            </CardActions>
        </Card>
        </>
    )
}
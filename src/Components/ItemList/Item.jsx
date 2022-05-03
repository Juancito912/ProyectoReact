import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({item}) {
    return (
        <>
        <Card sx={{ maxWidth: 340 ,maxHeight:330}}>
            <CardMedia
                component="img"
                height="180"
                image={item.img}
                alt={item.name}
                sx={{objectFit:'cover'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Añadir al carrito</Button>
                <Button size="small">Ver mas</Button>
            </CardActions>
        </Card>
        </>
    )
}
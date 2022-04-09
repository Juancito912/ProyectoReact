import React from 'react';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({item}) {
    return (
        <Card sx={{ maxWidth: "30rem"}}>
        <CardMedia
        sx={
            {objectFit:"contain"}
        }
            component="img"
            height="300"
            width="100"
            image={item.img}
            alt={item.title}
        />
        <CardContent sx={{textAlign:"center"}}>
            <Typography gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
            {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.price}
            </Typography>
        </CardContent>
        <CardActions >
            <Button size="small">Ver detalle del producto</Button>
        </CardActions>
        </Card>
    );
}
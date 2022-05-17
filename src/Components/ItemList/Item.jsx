import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider,Badge } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Context } from '../../Context/CartContext';

export default function Item({item}) {

    const {findInCart,getQuantityItem} = useContext(Context);
    return (
        <>
        <Card sx={{m:0,maxWidth:350}}>
            <CardMedia
                component="img"
                height="250"
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
                <Button as={Link} to={`/item/${item.id}`} variant='contained' color='error' size="medium"
                sx={{textDecoration:'none', color:'white',ml:2,':hover':{color:'black'}}}>
                    Ver Producto
                </Button>
                {findInCart(item.id)=== -1? null:(
                    <Badge color="success" sx={{pl:1}} badgeContent={getQuantityItem(item.id)}>
                    <ShoppingCartRoundedIcon />
                    </Badge>
                )}
                
            </CardActions>
        </Card>
        </>
    )
}
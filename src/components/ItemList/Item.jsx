import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item({item}) {
    return (
        <>
    
            <Card className='bg-dark m-1' style={{color:'white', width: '22rem' }}>
                <Card.Img variant="top" src={item.img} style={{height:'30vh'}} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Precio: ${item.price}</Card.Text>
                    <Button variant="danger"><Link className='text-decoration-none'style={{color:'white'}} to={`/item/${item.id}`}>Ver mas</Link></Button>
                </Card.Body>
            </Card>
        
        </>
    )
}
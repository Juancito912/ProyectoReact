import React from 'react';
import { Button,Card } from 'react-bootstrap';

export default function Item({item}) {
    return (
        <>
    
            <Card className='bg-dark m-1' style={{color:'white', width: '20rem' }}>
                <Card.Img variant="top" src={item.img} style={{height:'30vh'}}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Card.Text>Precio: ${item.price}</Card.Text>
                    <Button variant="danger">Ver mas</Button>
                </Card.Body>
            </Card>
        
        </>
    )
}
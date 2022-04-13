import React from 'react';
import { Container } from 'react-bootstrap';
import { Image,Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
    return (
    <>
        <Container className='d-flex'>
            <Image variant="left" rounded="true" src={product.img} style={{width:'25rem',height:'34vh'}}></Image>
            <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title  className='pb-3'>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                <Card.Text>
                Stock disponible: {product.stock} Unidades.
                </Card.Text>
                <ItemCount initial={1} stock={product.stock}/>
            </Card.Body>
            </Card>
        </Container>
    </>
    );
}
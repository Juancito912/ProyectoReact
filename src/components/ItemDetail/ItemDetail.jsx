import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
    return (
    <>
        <Container className='d-flex justify-content-center mt-3'>
            <Card className='flex-row'>
            <Card.Img variant="left" rounded="true" src={product.img} style={{height:'40vh'}}/>
                <Card.Body >
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
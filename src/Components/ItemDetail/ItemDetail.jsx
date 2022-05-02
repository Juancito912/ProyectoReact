import React, { useState } from 'react';
import ItemCart from './ItemCart';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
    const [show,setShow] = useState(false);
    const [unidad,setUnidad] = useState(0);
    const onAdd = (x)=> {
        setUnidad(x);
        setShow(true);
    }
    return (
    <>
        {/* <Container className='d-flex justify-content-center mt-3'>
            <Card className='flex-row'>
            <Card.Img variant="left" rounded="true" src={product.img} style={{height:'40vh'}}/>
                <Card.Body >
                    <Card.Title  className='pb-3'>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                    <Card.Text>
                    Cantidad: <strong>{unidad} Unidades</strong>. 
                    </Card.Text>
                    <Card.Text>Stock Disponible: {product.stock} unidades.</Card.Text>
                    {!show ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>: <ItemCart product={product} quantity={unidad} />}
                </Card.Body>
            </Card>
        </Container> */}
    </>
    );
}
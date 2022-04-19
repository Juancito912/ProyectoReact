import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ItemList.module.css'

export default function Item({item}) {
    return (
        <>
    
            <Card className='bg-dark m-1' style={{color:'white', width: '22rem' }}>
                <Card.Img variant="top" src={item.img} style={{height:'27vh'}} className='img-fluid'/>
                <Card.Body className='text-center'>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Precio: ${item.price}</Card.Text>
                    <Button variant="danger"><Link className={styles.link} to={`/item/${item.id}`}>Ver mas</Link></Button>
                </Card.Body>
            </Card>
        
        </>
    )
}
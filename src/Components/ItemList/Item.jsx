import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ItemList.module.css';

export default function Item({item}) {
    return (
        <>
    
            <Card className={styles.cards}>
                <Card.Img variant="top" src={item.img} style={{height:'20vh'}} className='img-fluid'/>
                <Card.Body className='text-center p-1'>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Precio: ${item.price}</Card.Text>
                    <Button variant="danger" className='mb-1'><Link className={styles.link} to={`/item/${item.id}`}>Ver mas</Link></Button>
                </Card.Body>
            </Card>
        
        </>
    )
}
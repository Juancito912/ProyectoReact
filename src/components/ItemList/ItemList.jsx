import React from 'react';
import Item from './Item';
import { Container } from 'react-bootstrap';

export default function ItemList({items}) {
    return (
        <>
            <Container className='d-flex flex-wrap justify-content-between'>
                {items.map(obj => <Item key={obj.id} item={obj} />)}
            </Container> 
        </>
    );
    
}
import React from 'react';
import Item from './Item';
import { Row } from 'react-bootstrap';

export default function ItemList({items}) {
    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {items.map(obj => <Item key={obj.id} item={obj} />)}
            </Row> 
        </>
    );
    
}
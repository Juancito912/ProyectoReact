import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import styles from './NavBar.module.css';

export default function NavBar  ()  {
    const categories = ["Remeras","Pantalones","Camperas","Medias"];
    return (
        <>
        <Navbar bg="dark" className='p-1' variant="dark">
            <Container className='ms-5'>
            <Link className='text-decoration-none' to={'/'}><Navbar.Brand className='fs-3'> Clothing Store</Navbar.Brand></Link>
            <Nav className="text-center mt-1 mb-1 fs-5">
                {categories.map(obj => (<Nav.Link key={obj} className='pe-3'>
                    <Link className={styles.link} to={`/category/${obj}`}>{obj}</Link>
                    </Nav.Link>))}
                
            </Nav>
            <CartWidget/>
            </Container>
            
        </Navbar>   
        </>
    );
};




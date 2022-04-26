import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './components/Cart/CartContainer';
import NotFoundPage from './components/Errors/NotFoundPage';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/> 
        <Routes>
        
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}


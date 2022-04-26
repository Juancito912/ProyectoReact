import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './Components/Cart/CartContainer';
import NotFoundPage from './Components/Errors/NotFoundPage';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

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


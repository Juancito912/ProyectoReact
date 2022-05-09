import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './Components/Cart/CartContainer';
import CategoriesContainer from './Components/Categories/CategoriesContainer';
import NotFoundPage from './Components/Errors/NotFoundPage';
import Footer from './Components/Footer/Footer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import CartContext from './Context/CartContext';

export default function App() {
  return (
    <>
      <CartContext>
      <BrowserRouter>
        <NavBar/> 
        <Routes>

          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/' element={<CategoriesContainer/>}/>
          <Route path='/allProducts' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
          <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      </CartContext>
      
    </>
  );
}


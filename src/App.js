import React from 'react';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}


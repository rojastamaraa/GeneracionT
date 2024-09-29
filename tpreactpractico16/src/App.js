import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Carrito de Compras</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;

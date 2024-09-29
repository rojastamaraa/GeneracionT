import React from 'react';
import Contador from './components/Contador';
import CalculadoraCuadrados from './components/CalculadoraCuadrados';
import PrecioTotalProductos from './components/PrecioTotal';

const App = () => {
  return (
    <div>
      <h1>Ejercicios de React</h1>
      <Contador />
      <CalculadoraCuadrados />
      <PrecioTotalProductos />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const PrecioTotal = () => {
  const [producto, setProducto] = useState({ nombre: '', precio: '' });
  const [productos, setProductos] = useState([]);

  const agregarProducto = () => {
    if (producto.nombre && producto.precio) {
      setProductos([...productos, { ...producto, precio: parseFloat(producto.precio) }]);
      setProducto({ nombre: '', precio: '' });
    }
  };

  const total = productos.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div>
      <input
        type="text"
        value={producto.nombre}
        onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
        placeholder="Nombre del producto"
      />
      <input
        type="number"
        value={producto.precio}
        onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
        placeholder="Precio"
      />
      <button onClick={agregarProducto}>Agregar Producto</button>
      <h2>Total: ${total.toFixed(2)}</h2>
      <ul>
        {productos.map((prod, index) => (
          <li key={index}>{prod.nombre}: ${prod.precio.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrecioTotal;

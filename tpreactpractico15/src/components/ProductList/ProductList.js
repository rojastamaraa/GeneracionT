import React from 'react';
import './ProductList.css';

const ProductList = () => {
    const productos = [
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
        { id: 3, nombre: 'Producto 3', precio: 300 },
        { id: 4, nombre: 'Producto 4', precio: 400 },
        { id: 5, nombre: 'Producto 5', precio: 500 },
        { id: 6, nombre: 'Producto 6', precio: 600 },
    ];

    return (
        <div className="product-list">
            {productos.map((producto) => (
                <div key={producto.id} className="product-item">
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

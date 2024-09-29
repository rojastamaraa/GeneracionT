import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
];

const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Lista de Productos</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Precio: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

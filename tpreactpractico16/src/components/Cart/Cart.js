import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Precio: ${item.price} x {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;

import React, { useState } from 'react';

const CalculadoraCuadrados = () => {
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularCuadrado = () => {
        const num = parseFloat(numero);
        if (!isNaN(num)) {
            setResultado(num * num);
        } else {
            setResultado(null);
        }
    };

    return (
        <div>
            <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ingresa un número"
            />
            <button onClick={calcularCuadrado}>Calcular Cuadrado</button>
            {resultado !== null && <h2>Resultado: {resultado}</h2>}
        </div>
    );
};

export default CalculadoraCuadrados;

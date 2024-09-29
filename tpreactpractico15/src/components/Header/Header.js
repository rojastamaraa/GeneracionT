import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Header.css';

const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Tienda Virtual</span>
                <button className="btn btn-primary boton" onClick={toggleTheme}>Swap</button>
            </div>
        </nav>
    );
};

export default Header;

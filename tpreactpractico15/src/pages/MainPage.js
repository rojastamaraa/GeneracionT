import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ProductList from '../components/ProductList/ProductList';

const MainPage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const pageClass = isDarkMode ? 'dark-mode' : 'light-mode';

    return (
        <div className={`${pageClass} contenedor`}>
            <ProductList />
        </div>
    );
};

export default MainPage;

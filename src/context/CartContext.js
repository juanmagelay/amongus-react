import React, { useState } from 'react';

export const CartContext = React.createContext({});

export default function CartContext ({
    children,
}) {
    const [darkMode, setDarkMode] = React.useState(false);
    const [products, setProducts] = React.useState([]);

    return (
        <CartContext.Provider value={{
            darkMode,
            setDarkMode,
            products,
            setProducts
        }}>
            {children}
        </CartContext.Provider>
    );

}

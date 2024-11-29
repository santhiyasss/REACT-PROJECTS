// src/Header.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import routing hook
import '../styles/Header.css';

const Header = () => {
    const location = useLocation(); // Get the current URL path

    // Conditionally hide the header on certain pages (e.g., /login or /checkout)
    if (location.pathname === '/login' || location.pathname === '/checkout') {
        return null; // Don't render the header on these pages
    }

    return (
        <header>
            <h1>Welcome to the Toy Store</h1>
        </header>
    );
};

export default Header;
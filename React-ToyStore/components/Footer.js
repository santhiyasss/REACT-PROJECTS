// src/Footer.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import routing hook
import '../styles/Footer.css';

const Footer = () => {
    const location = useLocation(); // Get the current URL path

    // Conditionally hide the footer on certain pages (e.g., /login or /checkout)
    if (location.pathname === '/login' || location.pathname === '/checkout') {
        return null; // Don't render the footer on these pages
    }

    return (
        <footer>
            <p>&copy; 2024 Toy Store. All rights reserved.</p>
            <p>
                Follow us on 
                <a href="https://www.facebook.com"> Facebook</a>, 
                <a href="https://www.twitter.com"> Twitter</a>, 
                <a href="https://www.instagram.com"> Instagram</a>
            </p>
        </footer>
    );
};

export default Footer;
// src/components/Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import '../styles/Navigation.css'; // Make sure you have styles for navigation

const Navigation = ({ user, onLogout }) => {
    const location = useLocation(); // Get the current URL path

    // Conditional rendering: Hide the navigation on certain pages (e.g., /login)
    if (location.pathname === '/login') {
        return null; // Don't render the navigation on the login page
    }

    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            {user ? (
                <>
                    <span>Welcome, {user}</span>
                    <button onClick={onLogout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Navigation;
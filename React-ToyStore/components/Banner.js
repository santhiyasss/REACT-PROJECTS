import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import routing hooks
import '../styles/Banner.css';

const Banner = ({ message, onLogout }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location

    const handleGetStarted = () => {
        navigate('/products');
    };

    return (
        <div className="banner">
            <h1>{message}</h1>
            <div className="banner-buttons">
                {/* Conditionally render the "Get Started" button based on the URL path */}
                {location.pathname !== '/products' && (
                    <button className="get-started-button" onClick={handleGetStarted}>
                        Get Started
                    </button>
                )}

                {/* Conditionally render the "Logout" button if not on the login page */}
                {location.pathname !== '/login' && (
                    <button className="logout-button" onClick={onLogout}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Banner;
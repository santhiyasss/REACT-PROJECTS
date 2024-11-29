// src/AboutUs.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import for routing
import '../styles/AboutUs.css';

const AboutUs = () => {
    const location = useLocation();  // Get the current URL path
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);  // Function to go back to the previous page
    };

    return (
        <div className="about-us">
            <h2>About Us</h2>
            <p>
                Welcome to Toy Store! We offer a wide range of toys for kids of all ages. 
                Our mission is to bring joy and creativity to every child through our products.
            </p>
            <p>
                Established in 2024, we are dedicated to providing high-quality toys at 
                affordable prices. Thank you for choosing Toy Store!
            </p>

            {/* Conditional rendering based on the current URL path */}
            {location.pathname === '/about/special' && (
                <p>You've found our special page! Enjoy exclusive deals and offers!</p>
            )}

            {/* Go back button for easy navigation */}
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default AboutUs;
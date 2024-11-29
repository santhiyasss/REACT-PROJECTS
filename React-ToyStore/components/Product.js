// src/Product.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import routing hooks
import '../styles/Product.css';

const Product = ({ name, price, description }) => {
    const location = useLocation(); // Get the current URL path

    // Conditional rendering: Show additional details or links on a product details page
    const isDetailsPage = location.pathname.includes('/products/');

    return (
        <div className="product">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>

            {/* Conditionally render additional content on the details page */}
            {isDetailsPage && (
                <div className="additional-details">
                    <Link to="/cart" className="add-to-cart-button">
                        Add to Cart
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Product;
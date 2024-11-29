// src/CategoryFilter.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import routing hooks
import '../styles/CategoryFilter.css';

const CategoryFilter = ({ categories, onSelectCategory }) => {
    const navigate = useNavigate();  // Allows for navigation to a specific route
    const location = useLocation();  // Provides the current path

    const handleCategorySelect = (category) => {
        onSelectCategory(category);  // Call the provided onSelectCategory function
        navigate(`/category/${category}`);  // Navigate to the category-specific page
    };

    return (
        <div className="category-filter">
            <h3>Filter by Category</h3>

            {/* Conditionally render based on current route */}
            {location.pathname === '/category/special' && (
                <p>Special discounts on selected categories!</p>
            )}

            <ul>
                {categories.map((category) => (
                    <li key={category} onClick={() => handleCategorySelect(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilter;

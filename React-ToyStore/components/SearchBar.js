// src/SearchBar.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import '../styles/SearchBar.css'; // Optional CSS for styling

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation(); // Get the current URL path

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm); // Pass the search term to the parent component
    };

    // Conditional rendering: Only show the search bar on specific pages
    const showSearchBar = location.pathname !== '/checkout' && location.pathname !== '/login';

    return (
        showSearchBar && ( // Render the search bar only if showSearchBar is true
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>
        )
    );
};

export default SearchBar;
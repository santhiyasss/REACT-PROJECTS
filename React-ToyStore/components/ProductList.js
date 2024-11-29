// src/components/ProductList.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductList.css'; // Add any required styling

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;

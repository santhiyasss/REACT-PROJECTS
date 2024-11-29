import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    // Fetch cart items from backend
    useEffect(() => {
        axios.get('http://localhost:5000/cartItems')
            .then(response => setCartItems(response.data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);

    const handleRemoveItem = (index) => {
        const item = cartItems[index];
        axios.delete(`http://localhost:5000/cartItems/${item.id}`)
            .then(() => {
                setCartItems(cartItems.filter((_, i) => i !== index));
            })
            .catch(error => console.error('Error removing item:', error));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total.toFixed(2)}</p>
                    {location.pathname !== '/checkout' && (
                        <button onClick={handleCheckout}>Checkout</button>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;

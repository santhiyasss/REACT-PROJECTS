// src/ContactUs.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import routing hooks
import '../styles/ContactUs.css';

const ContactUs = () => {
    const navigate = useNavigate();  // Allows for navigation after form submission
    const location = useLocation();  // Provides the current URL path
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Simulate form submission and navigate to a thank-you page
        navigate('/thank-you');
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>

            {/* Conditionally render a thank you message if on /thank-you route */}
            {location.pathname === '/thank-you' ? (
                <p>Thank you for reaching out! We'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            )}
        </div>
    );
};

export default ContactUs;
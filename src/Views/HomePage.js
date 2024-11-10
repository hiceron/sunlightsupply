// src/Views/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div>
            {/* Navbar */}
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                    <Link className="navbar-brand" to="/">Sunlight Supply</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            {/* Add other nav items as needed */}
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Home Section */}
            <main>
                <section id="home" className="d-flex align-items-center">
                    <div className="container text-center">
                        <h1>Sustainable Plastics for a Greener Future</h1>
                        <p>Committed to creating high-quality recycled plastic materials that contribute to environmental sustainability.</p>
                        <Link className="btn btn-warning btn-lg m-2" to="/shop">Shop Our Products</Link>
                        <a className="btn btn-outline-light btn-lg m-2" href="#sustainability">Learn About Sustainability</a>
                    </div>
                </section>
                {/* Additional sections like About, Sustainability, Testimonials, etc. */}
            </main>
        </div>
    );
}

export default HomePage;

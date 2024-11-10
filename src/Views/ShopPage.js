// src/Views/ShopPage.js
import React, { useState } from 'react';
import './ShopPage.css';

function ShopPage() {
    const products = [
        { id: 'pp', name: 'Polypropylene Bulk', price: 500, imgSrc: 'images/pp.webp' },
        { id: 'pe', name: 'Polyethylene Bulk', price: 550, imgSrc: 'images/PE.webp' },
        { id: 'ps', name: 'Polystyrene Bulk', price: 600, imgSrc: 'images/PS.webp' },
    ];

    // State for each product's quantity
    const [quantities, setQuantities] = useState({
        pp: 1,
        pe: 1,
        ps: 1,
    });

    // Update quantity in state
    const handleQuantityChange = (productId, value) => {
        setQuantities({
            ...quantities,
            [productId]: parseInt(value, 10),
        });
    };

    const handleAddToCart = (productId) => {
        const quantity = quantities[productId];
        window.addToCart(productId, quantity);
    };

    return (
        <div className="shop py-5">
            <div className="container">
                <h2>Shop Our Products</h2>
                <p>Browse our selection of high-quality recycled plastic materials available for bulk purchase.</p>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card mb-4 shadow-sm">
                                <img src={product.imgSrc} className="card-img-top" alt={product.name} loading="lazy" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Price: ${product.price} per ton</p>
                                    <label htmlFor={`quantity-slider-${product.id}`}>Select Quantity (tons):</label>
                                    <input
                                        type="range"
                                        className="custom-range"
                                        id={`quantity-slider-${product.id}`}
                                        min="1"
                                        max="10"
                                        value={quantities[product.id]}
                                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                    />
                                    <span>{quantities[product.id]} ton{quantities[product.id] > 1 ? 's' : ''}</span>
                                    <button
                                        className="btn btn-warning btn-block mt-3"
                                        onClick={() => handleAddToCart(product.id)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShopPage;

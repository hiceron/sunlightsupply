// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Views/HomePage';
import ShopPage from './Views/ShopPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
            </Routes>
        </Router>
    );
}

export default App;

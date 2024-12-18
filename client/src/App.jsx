import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import FeatureProduct from './components/FeatureProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<FeatureProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

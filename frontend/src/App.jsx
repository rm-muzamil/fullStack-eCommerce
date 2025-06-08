import React from 'react';
import './App.css'; // Ya jo bhi CSS file ka naam ho

import { Routes, Route, Navigate } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './pages/Home';
import Product from './pages/About';
import About from './pages/About';
import Dashboard from './pages/Dashboard ';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      {/* <Greeting /> */}
      <Routes>
        
        <Route path="/" element={<Greeting/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/login" element={<Login/>} /> 
  <Route path="/cart" element={<Cart/>} /> 
        
      </Routes>
    </>
  );
}

export default App;

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
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      {/* <Greeting /> */}
      <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<Greeting/>} />
        <Route path="/home" element={<Home />} />
       
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/login" element={<Login/>} /> 

       <Route path="/ProductDetail" element={<ProductDetail/>} />   
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Navbar from "./pages/Navbar";
import Reg from './pages/Reg';
import HomePage from './pages/HomePage';
import Cart from './pages/cart';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div>
      
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/reg" element={<Reg />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  <Footer /> 
</BrowserRouter>
    </div>
  );
};

export default App;
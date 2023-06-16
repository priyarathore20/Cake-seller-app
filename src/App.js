import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import Cart from './Pages/Cart';
import SignupPage from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

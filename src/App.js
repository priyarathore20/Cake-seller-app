import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

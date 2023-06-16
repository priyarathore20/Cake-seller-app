import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import MainPage from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Home' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

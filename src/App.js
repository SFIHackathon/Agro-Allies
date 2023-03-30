import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About';
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/form/login' element={<Login />} />
            <Route path='/form/registerSeller'element={<Register />} />
            <Route path='/form/registerBuyer' element={<Register />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

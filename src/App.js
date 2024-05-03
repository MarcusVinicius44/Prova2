import './App.css';
import Footer from './footer';
import Forms from './forms';
import Home from './home';
import Navbar from './navbar';
import React from 'react'; import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuemSomos from './quemsomos';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/contato' element={<Forms />} /> 
        <Route path='/quemsomos' element={<QuemSomos />} /> 
      </Routes> 
      </BrowserRouter>      
      <Footer/>
    </div>
  );
}

export default App;

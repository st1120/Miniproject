import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import Remote from './Pages/Remote';
import { Route,Routes } from "react-router-dom"
function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Remote" element={<Remote />} />
          <Route path="/About" element={<About />} /> 
        </Routes>
      </div>
      <Footer />
    </div> 
  );
}

export default App;

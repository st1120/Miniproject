import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Ulogin from './Pages/Ulogin';
import Alogin from './Pages/Alogin';
import Dlogin from './Pages/Dlogin';
import About from './Pages/About';
import Remote from './Pages/Remote';
import UserReg from './Pages/Userreg';
import Driverreg from './Pages/Driverreg';
import { Route,Routes } from "react-router-dom"
function App() {
  
  return (
    <div className='App'>
      <div>
      <Navbar /></div>
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Ulogin" element={<Ulogin />} />
          <Route path="/Alogin" element={<Alogin />} />
          <Route path="/Dlogin" element={<Dlogin />} />
          <Route path="/Remote" element={<Remote />} />
          <Route path="/About" element={<About />} /> 
          <Route path="/Userreg" element={<UserReg />} /> 
          <Route path="/Driverreg" element={<Driverreg />} />
        </Routes>
      </div>
      <div>
      <Footer /></div>
    </div> 
  );
}

export default App;

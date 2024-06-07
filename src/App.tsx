import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Destination from './Pages/Destination/Destination';
import Packages from './Pages/Packages/Packages';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Privacy from './Pages/Privacy/Privacy';


function App() {
  return (
    <Router>

    <Header/>
    <Routes>
      <Route  path="/"  element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact"  element={<Contact />} />
      <Route path="/destination"  element={<Destination />} />
      <Route path="/packages"  element={<Packages />} />
      <Route path="/privacy" element={<Privacy />} />
  
    </Routes>
    <Footer/>

</Router>
  );
}

export default App;

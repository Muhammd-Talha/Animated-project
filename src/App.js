import React from 'react';
import "./App.css"
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home"
import Services from "./Components/Services"
import Portfolio from "./Components/Portfolio"
import Faqs from "./Components/Faqs"
import Contact from "./Components/Contact"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

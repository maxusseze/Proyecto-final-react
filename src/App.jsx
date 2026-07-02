import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards'; 
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Cards />} />
        <Route path="/productos" element={<Productos />} />
        
        {/* Dejamos SOLAMENTE tu componente Contacto real */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
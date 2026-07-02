import React from 'react';
import { Link } from 'react-router-dom'; // Activamos el motor de rutas de React

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h2>Audio-Zone</h2>
        <div className="redes-header">
          <div className="item">
            <i className="bi bi-whatsapp"></i>
            <span>2995755509</span>
          </div>
          <div className="item">
            <i className="bi bi-instagram"></i>
            <span>Audio.Zone</span>
          </div>
          <div className="item">
            <i className="bi bi-facebook"></i>
            <span>Audio-Zone</span>
          </div>
        </div>
        <ul>
          {/* Cambiamos 'a' por 'Link' y 'href' por 'to' con la ruta limpia */}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/ofertas">Ofertas</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
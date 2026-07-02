import React from 'react';
import '../Cards.css'; // Importamos sus estilos
import stratImg from '../assets/stratocaster.webp';
import lesPaulImg from '../assets/les.jpg';

function Cards() {
  return (
    <section className="seccion-ofertas">
      {/* Banner de Ofertas */}
      <div className="home">
        <div className="texto" style={{ position: 'relative', left: '0', transform: 'none', padding: '40px 0' }}>
          <h1>Ofertas Imposibles</h1>
          <p>Solo por tiempo limitado</p>
        </div>
      </div>

      {/* Contenedor de las Tarjetas */}
      <div className="contenedor-cards">
        <div className="card">
          <img src={stratImg} alt="Fender Stratocaster" />
          <h3>Fender Stratocaster</h3>
          <p>Un clásico del rock con sonido brillante.</p>
          <p><strong>$1.500.000 ARS</strong></p>
        </div>

        <div className="card">
          <img src={lesPaulImg} alt="Gibson Les Paul" />
          <h3>Gibson Les Paul</h3>
          <p>Sonido potente y cuerpo sólido.</p>
          <p><strong>$1.200.000 ARS</strong></p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
import React from 'react';
import '../Galeria.css'; // Importamos sus estilos

// Importamos todas las imágenes desde assets
import heroImg from '../assets/guitarraencabezado.jpg';
import electricaImg from '../assets/guitarra-electrica.jpg';
import percusionImg from '../assets/percusion.jpeg';
import bajosImg from '../assets/bajos-electricos.webp';
import vientoImg from '../assets/viento.jpg';
import tecladosImg from '../assets/teclados.webp';
import pedalesImg from '../assets/pedales.jpg';
import violinImg from '../assets/violin.jpg';
import platillosImg from '../assets/platillos.jpg';

function Productos() {
  return (
    <section className="galeria">
      <h2>Nuestros Productos</h2>

      <div className="grid">
        <div className="imagen-con-texto">
          <img src={heroImg} alt="Guitarras Acústicas" />
          <p className="texto-img">Guitarras Acusticas</p>
        </div>

        <div className="imagen-con-texto">
          <img src={electricaImg} alt="Guitarras Eléctricas" />
          <p className="texto-img">Guitarras Electricas</p>
        </div>

        <div className="imagen-con-texto">
          <img src={percusionImg} alt="Percusión" />
          <p className="texto-img">Percusion</p>
        </div>

        <div className="imagen-con-texto">
          <img src={bajosImg} alt="Bajos Eléctricos" />
          <p className="texto-img">Bajos Electricos</p>
        </div>

        <div className="imagen-con-texto">
          <img src={vientoImg} alt="Instrumentos de Viento" />
          <p className="texto-img">Instrumentos de Viento</p>
        </div>

        <div className="imagen-con-texto">
          <img src={tecladosImg} alt="Teclados" />
          <p className="texto-img">Teclados</p>
        </div>

        <div className="imagen-con-texto">
          <img src={pedalesImg} alt="Pedales" />
          <p className="texto-img">Pedales</p>
        </div>

        <div className="imagen-con-texto">
          <img src={violinImg} alt="Violines" />
          <p className="texto-img">Violines</p>
        </div>

        <div className="imagen-con-texto">
          <img src={platillosImg} alt="Platillos" />
          <p className="texto-img">Platillos</p>
        </div>
      </div>
    </section>
  );
}

export default Productos;
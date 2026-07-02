import React from 'react';
import '../styles/index.css'; // Importamos sus estilos específicos
import heroImg from '../assets/guitarraencabezado.jpg'; // Importamos la imagen

function Home() {
  return (
    <main>
      <section className="home">
        {/* Usamos la variable de la imagen importada y agregamos la clase faltante */}
        <img src={heroImg} alt="hero" className="hero-img" />

        <div className="texto">
          <h1>Bienvenidos a Audio-Zone</h1>
          <p>Los mejores instrumentos a precios increíbles</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
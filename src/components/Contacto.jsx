import React, { useState } from 'react';
import '../styles/Contacto.css'; 

function Contacto() {
  //  Punto 3 de la consigna
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Trabaja con Nosotros',
    preferencia: 'Email',
    mensaje: ''
  });

  // Función para capturar los eventos de los inputs y mostrarlos en consola
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Actualizamos el estado de manera dinámica
    setFormData({
      ...formData,
      [name]: value
    });

    // La consigna pide mostrar los eventos de los inputs en consola
    console.log(`Input modificado -> ${name}: ${value}`);
  };

  // Manejo del Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto 
    
    // Mostramos los datos finales en la consola del navegador
    console.log('--- FORMULARIO ENVIADO CON ÉXITO ---');
    console.log(formData);
    
    alert('¡Gracias por comunicarte con Audio-Zone! Los datos se enviaron (revisar consola).');
  };

  //  Reset
  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: 'Trabaja con Nosotros',
      preferencia: 'Email',
      mensaje: ''
    });
    console.log('Formulario reseteado');
  };

  return (
    <section className="contacto">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label>Nombre</label>
        <input 
          type="text" 
          name="nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Teléfono</label>
        <input 
          type="tel" 
          name="telefono" 
          value={formData.telefono} 
          onChange={handleChange} 
        />

        <label>Servicio</label>
        <select name="servicio" value={formData.servicio} onChange={handleChange}>
          <option>Trabaja con Nosotros</option>
          <option>Comprar</option>
          <option>Quejas</option>
        </select>

        <label>Preferencia</label>
        <div className="radio-group">
          <label>
            <input 
              type="radio" 
              name="preferencia" 
              value="Email" 
              checked={formData.preferencia === 'Email'} 
              onChange={handleChange} 
            /> Email
          </label>
          <label>
            <input 
              type="radio" 
              name="preferencia" 
              value="Teléfono" 
              checked={formData.preferencia === 'Teléfono'} 
              onChange={handleChange} 
            /> Teléfono
          </label>
        </div>

        <label>Mensaje</label>
        <textarea 
          name="mensaje" 
          value={formData.mensaje} 
          onChange={handleChange} 
          required
        ></textarea>

        <button type="submit">Enviar</button>
        <button type="reset" className="btn-reset">Reset</button>
      </form>
    </section>
  );

  
}

export default Contacto;
import React from "react";
import "../estilos/main.css"; 

const TopSlider = () => {
  return (
    <section id="inicio" className="top-slider">
      <div className="hero-content">
        <h1>FALCAR - CLIMATIZACIÓN Y CALEFACCIÓN PROFESIONAL</h1>
        <p>Tu confort, nuestra prioridad en Zona Sur y CABA</p>
        <div className="hero-buttons">
          <a href="#footer" className="btn-primary">
            Solicitar Presupuesto
          </a>
          <a 
            href="https://wa.me/5491152213723?text=Hola,%20necesito%20un%20presupuesto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
          >
            WhatsApp Directo
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopSlider;
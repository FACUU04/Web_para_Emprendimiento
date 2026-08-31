import React from "react";
import "../estilos/sobre.css"

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-contenido">
        <div className="texto">
          <h2>¿Quiénes somos?</h2>
          <p>
            <strong>Falcar</strong> es un emprendimiento familiar. Nos
            especializamos en instalación, reparación y mantenimiento de
            calderas, climatizadores de pileta y aires acondicionados.
            <br /><br />
            <strong>Servicio Técnico en Refrigeración y Calefacción en general.</strong>
          </p>
        </div>
        <div className="imagen">
          <img src="/img combinada.jpg" alt="Trabajo Falcar" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;

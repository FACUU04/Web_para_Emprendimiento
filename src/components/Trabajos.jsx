import React from "react";
import "../estilos/trabajos.css"

const Trabajos = () => {
  const imagenes = [
    "/termostato2.jpeg", "/instalacion.jpeg", "/calderax3.jpeg", "/instalacion aire.jpeg", "/refrigeracion.jpeg",
    "/instalacion radiadores.jpeg", "/climatizador.jpeg", "/termica1.jpeg", "/termica2.jpeg",
    "/termostato.jpeg", "/termostato3.jpeg", "/instalacion2.jpeg", "/instalacion3.jpeg", "/instalacion4.jpeg", "/instalacion5.jpeg", "/reparacion.jpeg",
    "/mantenimiento.jpeg", "/facu.jpeg", "/instalacion radiadores2.jpeg", "/instalacion radiadores3.jpeg", "/zentralt.jpeg", "/isntalacionprimatec.jpeg",
     "/condensacion.jpeg",
  ];

  return (
    <section id="trabajos" className="trabajos">
      <h2>Nuestros Trabajos</h2>
      <div className="carousel">
        <div className="carousel-track">
          {[...imagenes, ...imagenes].map((src, i) => (
            <img key={i} src={src} alt={`Trabajo ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trabajos;

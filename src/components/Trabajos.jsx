import React from "react";
import "../estilos/trabajos.css"

const Trabajos = () => {
  const imagenes = [
    "/4.jpg", "/6.jpg", "/instalacion.jpg", "/5.jpg", "/calderacambio.jpeg",
    "/calderacambio2.jpeg", "/climatizador.jpeg", "/climatizador2.jpeg",
    "/termostato.jpeg", "/termostato2.jpeg", "/quemador.jpeg", "/Zentraly.jpeg",
    "/Zentralycolocado.jpeg", "/facu.jpeg"
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

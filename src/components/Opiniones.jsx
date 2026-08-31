import React, { useEffect } from "react";
import "../estilos/main.css";

const Opiniones = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="testimonios" className="opiniones">
      {/* Eliminamos el <h2> de acá para que no se duplique con el de Elfsight */}
      <div className="widget-contenedor">
        <div 
          className="elfsight-app-741d0d62-c431-4e59-88fa-f519a10e8903" 
          data-elfsight-app-lazy="true"
        ></div>
      </div>
    </section>
  );
};

export default Opiniones;
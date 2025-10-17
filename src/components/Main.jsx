import React, { useState, useEffect } from "react";
import "../estilos/Main.css";

const Main = () => {
  const textosSlider = [
    "Instalación, Mantenimiento y Reparación",
    "Colocación de Termostatos Inteligentes con Wi-Fi",
    "Calderas, Climatizadores, Aires Acondicionados",
    "Refrigeración y Calefacción en general",
    "¿Sabias que..? Se recomienda hacer mantenimiento a los equipos 1 vez al año."
  ];

  const [index, setIndex] = useState(0);

  // Cambia el texto cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textosSlider.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [textosSlider.length]);

  return (
    <main>
      
      <section id="top-slider" className="top-slider">
        <p>{textosSlider[index]}</p>
      </section>

      {/* --- SOBRE NOSOTROS --- */}
      <section id="sobre" className="sobre">
        <div className="sobre-contenido">
          <div className="texto">
            <h2>¿Quiénes somos?</h2>
            <p>
              <strong>Falcar</strong> es un emprendimiento familiar. Nos
              especializamos en instalación, reparación y mantenimiento de
              calderas, climatizadores de pileta y aires acondicionados.
              <br />
              <br />
              <strong>Servicio Técnico en Refrigeración y Calefacción en general.</strong>
            </p>
          </div>
          <div className="imagen">
            <img src="/public/img combinada.jpg" alt="Trabajo Falcar" />
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="servicios">
        <h2>Servicios</h2>
        <div className="servicios-grid">
          <div className="servicio">
            <img src="/1.png" alt="Reparación" />
            <h4>Reparación & Mantenimiento</h4>
            <p>
              Reparación, instalación y mantenimiento de calderas y aires
              acondicionados de todas las marcas.
            </p>
          </div>
          <div className="servicio">
            <img src="/2.png" alt="Repuestos" />
            <h4>Repuestos Originales</h4>
            <p>
              Trabajamos con repuestos originales para garantizar calidad y
              durabilidad.
            </p>
          </div>
          <div className="servicio">
            <img src="/3.png" alt="Garantía" />
            <h4>Garantía Escrita</h4>
            <p>Brindamos garantía escrita en todos nuestros trabajos.</p>
          </div>
        </div>

        <div className="sabias-que-contenedor">
    <div className="sabias-que-card">
      <div className="sabias-que-texto">
        <div className="icono-lampara">💡</div>
        <h4>¿Sabías que si no hacés mantenimiento a tu caldera...?</h4>
        <p>
          Puede acumular sarro, suciedad y aire en el circuito, lo que hace que
          consuma más gas y se recaliente. Esto **acorta su vida útil** y
          **aumenta tu consumo energético**.
        </p>
      </div>
      <img
        src="/calderasucia.jpeg"
        alt="Caldera sin mantenimiento"
        className="sabias-que-img"
      />
    </div>

    <div className="sabias-que-card">
      <div className="sabias-que-texto">
        <div className="icono-lampara">💡</div>
        <h4>¿Sabías que tu aire acondicionado también sufre?</h4>
        <p>
          Sin limpieza de filtros y unidad interna y externa, el aire trabaja forzado,
          **enfría menos**, **consume más energía** y puede generar malos olores
          o bacterias en el ambiente.
        </p>
      </div>
      <img
        src="/Airesucio.png"
        alt="Aire acondicionado sucio"
        className="sabias-que-img"
      />
    </div>
  </div>

  <div className="servicios-info">
      <h3>La importancia del mantenimiento</h3>
      <p>
        En <strong>FALCAR</strong> creemos que el mantenimiento no es un gasto,
        sino una inversión. Mantener tus sistemas en buen estado evita fallas
        inesperadas, mejora la eficiencia y alarga la vida útil de los equipos.
      </p>

      <p>
        Un mantenimiento periódico permite detectar problemas a tiempo, reducir
        consumos de energía y garantizar un funcionamiento seguro y confiable.
        Además, mejora el confort y evita interrupciones en momentos clave.
      </p>

      <p>
        Siempre siguiendo los estándares de seguridad y calidad.
      </p>

      <ul>
        <li>✔ Más eficiencia y menor consumo</li>
        <li>✔ Mayor vida útil de los equipos</li>
        <li>✔ Menos reparaciones imprevistas</li>
        <li>✔ Funcionamiento seguro y confiable</li>
      </ul>
    </div>
  
      </section>

      {/* --- NUESTROS TRABAJOS --- */}
      <section id="trabajos" className="trabajos">
  <h2>Nuestros Trabajos</h2>
  <div className="carousel">
    <div className="carousel-track">

      {/* Primer grupo */}
      <img src="/4.jpg" alt="Instalación de Caldera" />
      <img src="/6.jpg" alt="Mantenimiento de Climatizador" />
      <img src="/instalacion.jpg" alt="Instalación de Caldera" />
      <img src="/5.jpg" alt="Instalación de Radiadores" />
      <img src="/calderacambio.jpeg" alt="Cambio de caldera" />
      <img src="/calderacambio2.jpeg" alt="Cambio de caldera" />
      <img src="/climatizador.jpeg" alt="Mantenimiento climatizador" />
      <img src="/climatizador2.jpeg" alt="Mantenimiento climatizador" />
      <img src="/termostato.jpeg" alt="Colocacion Termostato" />
      <img src="/termostato2.jpeg" alt="Colocacion Termostato" />
      <img src="/quemador.jpeg" alt="Quemador de caldera limpio" />
      <img src="/Zentraly.jpeg" alt="Termostato Zentraly inteligente" />
      <img src="/Zentralycolocado.jpeg" alt="Colocacion Termostato Wi-Fi" />
      <img src="/facu.jpeg" alt="Tecnico revisando Caldera" />

      {/* Segundo grupo duplicado para animación continua */}
      <img src="/4.jpg" alt="Instalación de Caldera" />
      <img src="/6.jpg" alt="Mantenimiento de Climatizador" />
      <img src="/instalacion.jpg" alt="Instalación de Caldera" />
      <img src="/5.jpg" alt="Instalación de Radiadores" />
      <img src="/calderacambio.jpeg" alt="Cambio de caldera" />
      <img src="/calderacambio2.jpeg" alt="Cambio de caldera" />
      <img src="/climatizador.jpeg" alt="Mantenimiento climatizador" />
      <img src="/climatizador2.jpeg" alt="Mantenimiento climatizador" />
      <img src="/termostato.jpeg" alt="Colocacion Termostato" />
      <img src="/termostato2.jpeg" alt="Colocacion Termostato" />
      <img src="/quemador.jpeg" alt="Quemador de caldera limpio" />
      <img src="/Zentraly.jpeg" alt="Termostato Zentraly inteligente" />
      <img src="/Zentralycolocado.jpeg" alt="Colocacion Termostato Wi-Fi" />
      <img src="/facu.jpeg" alt="Tecnico revisando Caldera" />
    </div>
  </div>
</section>


      {/* --- DÓNDE ESTAMOS --- */}
      <section id="donde-estamos" className="donde-estamos">
        <h2>¿Dónde estamos?</h2>
        <p>
          Trabajamos en Zona Sur, Buenos Aires. Monte Grande, Canning, Ezeiza. Palermo, Recoleta, Colegiales CABA
        </p>
        <div className="mapa-container">
          <iframe src="https://www.google.com/maps/d/embed?mid=12RzbrxyYwaJ5R6MhOy54LdeqRz_BJZE&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
        </div>
      </section>
    </main>
  );
};

export default Main;

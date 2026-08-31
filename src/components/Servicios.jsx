import React from "react";
import "../estilos/servicios.css"

const Servicios = () => {
  return (
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
              consuma más gas y se recaliente. Esto <strong>acorta su vida útil</strong> y
              <strong> aumenta tu consumo energético</strong>.
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
              <strong> enfría menos</strong>, <strong> consume más energía</strong> y puede generar malos olores
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
  );
};

export default Servicios;

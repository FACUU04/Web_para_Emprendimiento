import React from "react";
import "../estilos/main.css";

const Productos = () => {
  const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; 

  const catalogo = [
    {
      id: 1,
      nombre: "Caldera DemirDöküm Atron H 24",
      descripcion: "Caldera de tiro forzado, doble servicio, con alta eficiencia energética y bajo consumo. Ideal para calefacción y agua caliente sanitaria.",
      imagen: "/venta.jpeg", 
    },
    {
      id: 2,
      nombre: "Caldera Peisa PrimaTec 24 dsf",
      descripcion: "Caldera de tiro forzado, doble servicio, con 5 años de garantía.",
      imagen: "/venta2.jpeg",
    },
    
  ];

  return (
    <section id="productos" className="productos">
      <div className="productos-header">
        <h2>Equipos Destacados</h2>
        <p>Venta directa con asesoramiento personalizado e instalación garantizada.</p>
      </div>
      
      <div className="productos-grid">
        {catalogo.map((producto) => {
          // Mensaje automático para que el cliente no tenga que tipear nada
          const mensajeWA = `Hola Falcar! Me interesa el equipo: ${producto.nombre}. ¿Me podrían pasar más info y presupuesto?`;
          
          return (
            <div key={producto.id} className="producto-card">
              <div className="producto-img-container">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
              
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                
                <a 
                  href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWA)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-comprar"
                >
                  Me interesa
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="productos-cta">
        <h3>¿Buscás otro equipo o algo mas?</h3>
        <p>Trabajamos con todas las marcas. Contanos qué necesitás y te armamos un presupuesto a medida.</p>
        <a 
          href={`https://wa.me/${numeroWhatsApp}?text=Hola%20Falcar!%20Estoy%20buscando%20un%20equipo%20diferente%20a%20los%20publicados,%20%C2%BFme%20podr%C3%ADan%20asesorar?`}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secundario"
        >
          Consultar por otros equipos
        </a>
      </div>
    </section>
  );
};

export default Productos;
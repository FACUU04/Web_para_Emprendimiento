import React, { useState } from "react";
import '../estilos/Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo-container">
        <img src="/logo2.png" alt="Logo de Falcar" className="logo-img" />
        <span className="logo-text">Falcar</span>
      </a>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={`navbar ${open ? 'open' : ''}`}>
        <a href="#sobre">Sobre Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#productos">Ventas</a> {/* ACÁ SUMAMOS EL NUEVO ENLACE */}
        <a href="#trabajos">Nuestros Trabajos</a>
        <a href="#footer">Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;

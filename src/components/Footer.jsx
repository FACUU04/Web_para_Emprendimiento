import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "../estilos/Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">


       <div className="footer-section">
               <div className="footer-section-title">
                   <img src="/logo2.png" alt="Logo de Falcar" className="logo-img" />
                   <h3>Somos FALCAR</h3>
                </div>
          <ul>
            <li><a href="#top-slider">Inicio</a></li>
            <li><a href="#sobre">Quienes somos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#donde-estamos">Zonas de Trabajo</a></li>
            <li><a href="#footer">Contacto</a></li>
          </ul>
          <div className="contact-icons">
            <a
              href="https://wa.me/5491152213723"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp"
            >
              <FaWhatsapp size={44} />
            </a>
            <a
              href="mailto:servicefalcar25@gmail.com"
              className="icon email"
            >
              <HiOutlineMail size={46} />
            </a>
          </div>
        </div>


        <div className="footer-section">
          <h3>Contactanos</h3>
          <p>Completa el siguiente formulario y nos pondremos en contacto con usted en menos de 48hrs habiles</p>

          <form
            action="https://formsubmit.co/servicefalcar25@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="Name"
              placeholder="Nombre"
              required
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Teléfono"
              required
            />
            <textarea
              name="Message"
              rows="3"
              placeholder="Mensaje"
              required
            ></textarea>
            <button type="submit">Enviar</button>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="s" />
          </form>
        </div>

        
      </div>

      <div className="footer-bottom">
        <p>© 2025 FALCAR Devs. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
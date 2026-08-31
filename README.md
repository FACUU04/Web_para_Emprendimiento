# Falcar - Servicio Técnico

Sitio web oficial de **Falcar**, un emprendimiento especializado en la instalación, reparación y mantenimiento de calderas, climatizadores y aires acondicionados en Zona Sur y CABA.

## 🛠️ Tecnologías Utilizadas

* **React.js** (Estructura de componentes)
* **CSS3 / Flexbox / Grid** (Estilos y diseño Mobile First)
* **React Icons** (Iconografía)
* **Elfsight Widget** (Integración de reseñas de Google)

## Estructura del Proyecto

src/
├── components/          
│   ├── Footer.jsx       # Contacto y formulario
│   ├── Mapa.jsx         # Mapa de cobertura
│   ├── Navbar.jsx       # Menú fijo y responsive
│   ├── Opiniones.jsx    # Módulo de Google Reviews
│   ├── Servicios.jsx    # Tarjetas de servicios
│   ├── Sobre.jsx        # Historia del emprendimiento
│   ├── TopSlider.jsx    # Hero section principal
│   └── Trabajos.jsx     # Carrusel de trabajos
│
├── estilos/             
│   ├── Footer.css
│   ├── Navbar.css
│   └── main.css         # Estilos globales y hero
│
├── App.jsx              # Componente raíz
└── main.jsx             # Punto de entrada

## Características Principales

* **Navbar Fijo:** Menú oscuro con diseño responsive y botón hamburguesa.
* **Hero Section:** Portada (100vh) alineada a la izquierda con botones de acceso rápido y WhatsApp directo.
* **Sección de Servicios:** Tarjetas interactivas con consejos de mantenimiento.
* **Galería en Movimiento:** Carrusel infinito de trabajos reales.
* **Opiniones:** Sincronizado automáticamente con Google Reviews mediante Elfsight.

## Ejecución Local

1. Clonar el repositorio:
   git clone https

2. Instalar dependencias:
   npm install

3. Iniciar desarrollo:
   npm run dev

## Licencia

Desarrollado para **Falcar Service**. Todos los derechos reservados.

import { useEffect, useRef } from "react";
import "../estilos/mapa.css";

const Mapa = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    window.initMap = () => {
      if (!window.google || !window.google.maps) return;

      const map = new window.google.maps.Map(mapRef.current, {
        mapId: "f66c277e127c2caa2c771ea1",
      });

      const bounds = new window.google.maps.LatLngBounds();

      const zonas = [
        { nombre: "Monte Grande", lat: -34.8185, lng: -58.4646 },
        { nombre: "Canning", lat: -34.8436, lng: -58.4875 },
        { nombre: "Ezeiza", lat: -34.8542, lng: -58.5286 },
        { nombre: "Lomas de Zamora", lat: -34.7609, lng: -58.4066 },
        { nombre: "Palermo", lat: -34.5800, lng: -58.4300 },
        { nombre: "Recoleta", lat: -34.5889, lng: -58.3933 },
        { nombre: "Colegiales", lat: -34.5711, lng: -58.4494 },
        { nombre: "Almagro", lat: -34.6090, lng: -58.4183 },
        { nombre: "Caballito", lat: -34.6189, lng: -58.4438 },
        { nombre: "CABA", lat: -34.6037, lng: -58.3816 },
      ];

      zonas.forEach((zona, i) => {
        const pin = new window.google.maps.marker.PinElement({
          background: "#9333ea",
          glyphColor: "#fff",
          borderColor: "#000",
        });

        const animatedWrapper = document.createElement("div");
        animatedWrapper.className = "fade-in-up";
        animatedWrapper.style.animationDelay = `${i * 0.1}s`;
        animatedWrapper.appendChild(pin.element);

        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: zona.lat, lng: zona.lng },
          title: `Servicio en ${zona.nombre}`,
          content: animatedWrapper,
        });

        bounds.extend({ lat: zona.lat, lng: zona.lng });
      });

      map.fitBounds(bounds);
    };

    if (!document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBxMwSdjIA1AsKZo9eIzVK4L9ZDx-SJUo0&libraries=marker&callback=initMap";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.maps) {
      window.initMap();
    }
  }, []);

  return (
    <section id="donde-estamos" className="donde-estamos">
      <h2>¿Dónde estamos?</h2>
      <p>
        Trabajamos en Zona Sur y CABA: Monte Grande, Canning, Ezeiza, Lomas de Zamora, Palermo, Recoleta, Colegiales, Almagro, Caballito.
      </p>
      <div className="mapa-container">
        <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div>
      </div>
    </section>
  );
};

export default Mapa;

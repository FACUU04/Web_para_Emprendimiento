import React from "react";
import Navbar from "./components/Navbar";
import TopSlider from "./components/TopSlider";
import Sobre from "./components/Sobre";
import Servicios from "./components/Servicios";
import Trabajos from "./components/Trabajos";
import Opiniones from "./components/Opiniones"; 
import Footer from "./components/Footer";
import "./estilos/global.css";
import Productos from "./components/Productos";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <TopSlider />
        <Sobre />
        <Servicios />
        <Productos />
        <Trabajos />
        <Opiniones /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;

//FACU0408


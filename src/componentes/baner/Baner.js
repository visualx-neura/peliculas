import React from "react";
import "./Baner.css"; // Archivo CSS para el estilo del banner

function Baner() {
  return (
    <div className="banner">
      <h2 className="banner__title">Bienvenido a la Plataforma de Videos</h2>
      <p className="banner__subtitle">
        Explora, comparte y agrega nuevos contenidos fácilmente.
      </p>
    </div>
  );
}

export default Baner;
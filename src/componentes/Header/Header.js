import React from "react";
import "./Header.css";

function Header({ onNuevoVideoClick, onAdminClick, mostrarNuevoVideo }) {
  return (
    <header className="header">
      <h1>Trailer Movie</h1>
      <nav className="header__nav">
        <button onClick={onNuevoVideoClick} className="header__button">HOME</button>
        {/* Mostrar el botón solo si el usuario está validado */}
        {mostrarNuevoVideo && (
          <button onClick={onNuevoVideoClick} className="header__button">Nuevo Video</button>
        )}
        <button onClick={onAdminClick} className="header__button">Administrador</button>
      </nav>
    </header>
  );
}

export default Header;



 
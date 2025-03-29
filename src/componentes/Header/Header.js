import React from "react";
import "./Header.css";

function Header({ onNuevoVideoClick, onAdminClick, mostrarNuevoVideo }) {
  return (
    <header className="header">
      <h1>Movies</h1>
    
      
      <nav className="header__nav">
      
        
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



 
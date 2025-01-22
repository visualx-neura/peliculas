import React from "react";

import "./Header.css";

function Header({ onNuevoVideoClick }) {
  return (
    <header className="header">
      <h1>Trailer Movie</h1>
      <nav>
        
      <button onClick={onNuevoVideoClick}>HOME</button>
        <button onClick={onNuevoVideoClick}>Nuevo Video</button>
      </nav>
    </header>
  );
}

export default Header;

 
import React, { useState, useEffect } from "react";
import "./Formulario.css";

function Formulario1({ categorias, onAgregarVideo, videoEditado }) {
  const [video, setVideo] = useState({
    titulo: "",
    url: "",
    categoria: categorias[0]
  });

  useEffect(() => {
    if (videoEditado) {
      setVideo(videoEditado);
    }
  }, [videoEditado]);

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregarVideo(video);
    setVideo({ titulo: "", url: "", categoria: categorias[0] });
  };

  return (
    <div className="formulario-container">
      <h2>Formulario de Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título del video</label>
          <input 
            type="text" 
            id="titulo" 
            name="titulo" 
            value={video.titulo} 
            onChange={handleChange} 
            placeholder="Título del video" 
          />
        </div>
        <div>
          <label htmlFor="url">URL del video</label>
          <input 
            type="url" 
            id="url" 
            name="url" 
            value={video.url} 
            onChange={handleChange} 
            placeholder="URL del video" 
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoría</label>
          <select 
            id="categoria" 
            name="categoria" 
            value={video.categoria} 
            onChange={handleChange}
          >
            {categorias.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <button type="submit">Guardar Video</button>
      </form>
    </div>
  );
}

export default Formulario1;







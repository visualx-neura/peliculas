import React, { useState } from "react";
import "./Formulario.css";
import { supabase } from "../../supabasecliente/SupabaseClient";

function Formulario1({ categorias }) {
  const [video, setVideo] = useState({
    titulo: "",
    url: "",
    categoria: categorias[0] || "", // Selecciona la primera categoría por defecto
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((prevVideo) => ({
      ...prevVideo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Datos enviados a Supabase:", video);
    
    try {
      const { error } = await supabase.from("videos").insert([video]); // Se eliminó 'data'
      if (error) {
        console.error("Error de Supabase:", error);
        alert("Error al guardar el video: " + error.message);
        return;
      }
      alert("Video guardado exitosamente.");
    } catch (error) {
      console.error("Error al guardar el video:", error.message);
      alert("Error al guardar el video.");
    }
  };

  return (
    <form className="formulario-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={video.titulo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={video.url}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          name="categoria"
          value={video.categoria}
          onChange={handleChange}
          required
        >
          {categorias.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Guardar Video</button>
    </form>
  );
}

export default Formulario1;




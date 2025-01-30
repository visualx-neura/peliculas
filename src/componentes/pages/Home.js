import React, { useEffect, useState } from "react";
import { supabase } from "../../supabasecliente/SupabaseClient";
import "./Home.css"; // Nuevo CSS

function Home({ categorias = [] }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase.from("videos").select("*");
      console.log("Respuesta de Supabase:", data);
      if (error) {
        console.error("Error al obtener videos:", error);
      } else {
        console.log("Videos obtenidos de la BD:", data);
        setVideos(data || []);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="home-wrapper">
      <h2 className="home-title">Categorías ¡Las Mejores Películas!</h2>
      {categorias.length > 0 ? (
        categorias.map((categoria, index) => (
          <div key={index} className="category-section">
            <h3 className="category-title">{categoria}</h3>
            <div className="videos-grid">
              {videos.filter((video) =>
                video.categoria.trim().toLowerCase() === categoria.trim().toLowerCase()
              ).length > 0 ? (
                videos
                  .filter((video) =>
                    video.categoria.trim().toLowerCase() === categoria.trim().toLowerCase()
                  )
                  .map((video) => (
                    <div key={video.id} className="video-card">
                      <strong className="video-title">{video.titulo}</strong>
                      <iframe
                        className="video-frame"
                        src={video.url}
                        title={video.titulo}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))
              ) : (
                <p className="no-videos-message">No hay videos en esta categoría.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="no-categories-message">No hay categorías disponibles.</p>
      )}
    </div>
  );
}

export default Home;

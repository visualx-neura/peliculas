import React from "react";
import "./Home.css";

function Home({ videos, categorias, onEditVideo, onDeleteVideo }) {
  return (
    <div className="home-container">
      <h2>Lista de Videos por Categoría</h2>
      {categorias.map((categoria, catIndex) => (
        <div key={catIndex} className="categoria-section">
          <h3 className={`categoria-titulo categoria-${catIndex}`}>{categoria}</h3>
          <div className="video-container">
            {videos.filter(video => video.categoria === categoria).length > 0 ? (
              videos.filter(video => video.categoria === categoria).map((video, vidIndex) => (
                <div key={vidIndex} className="video-cuadro">
                  <strong>{video.titulo}</strong>
                  <iframe 
                    src={video.url} 
                    title={video.titulo} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                  <div className="video-actions">
                    <button onClick={() => onEditVideo(video)}>Editar</button>
                    <button onClick={() => onDeleteVideo(video.id)}>Borrar</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay videos en esta categoría.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header/Header";
import Baner from "./componentes/baner/Baner";
import Categorias from "./componentes/categorias/Categorias";
import Formulario1 from "./componentes/formulario/Formulario";
import Footer from "./componentes/footer/Footer";
import Home from "./componentes/pages/Home";
import FormularioWrapper from "./components/FormularioWrapper";

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [videos, setVideos] = useState([]);
  const [videoEditado, setVideoEditado] = useState(null);

  const categorias = ["Acción", "Comedia", "Drama", "Documental"];

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const agregarVideo = (video) => {
    if (videoEditado) {
      setVideos(videos.map(v => v.id === videoEditado.id ? video : v));
      setVideoEditado(null);
    } else {
      setVideos([...videos, { ...video, id: videos.length + 1 }]);
    }
  };

  const handleEditVideo = (video) => {
    setVideoEditado(video);
    setMostrarFormulario(true);
  };

  const handleDeleteVideo = (videoId) => {
    setVideos(videos.filter(video => video.id !== videoId));
  };

  return (
    <Router>
      <Header onNuevoVideoClick={toggleFormulario} />
      <Baner />
      {mostrarFormulario && <Formulario1 categorias={categorias} onAgregarVideo={agregarVideo} videoEditado={videoEditado} />}
      <Routes>
        <Route path="/" element={<Home videos={videos} categorias={categorias} onEditVideo={handleEditVideo} onDeleteVideo={handleDeleteVideo} />} />
        <Route path="/categorias" element={<Categorias categorias={categorias} />} />
        <Route path="/nuevo-video" element={<FormularioWrapper categorias={categorias} onAgregarVideo={agregarVideo} videoEditado={videoEditado} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





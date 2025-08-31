import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Noticias from "./components/Noticias/Noticias";
import Personajes from "./components/Personajes/Personajes"; 
import Escenarios from "./components/Escenarios/Escenarios"; 
import Fondo from "./assets/Fondo.png";

function App() {

  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <Router>
      <div style={bgImagen} className="overflow-hidden min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/escenarios" element={<Escenarios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
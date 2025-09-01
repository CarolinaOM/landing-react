import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News"; 
import Characters from "./components/Characters/Characters"; 
import Stages from "./components/Stages/Stages"; 
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
          {}
          <Route path="/news" element={<News />} /> 
          <Route path="/characters" element={<Characters />} />
          <Route path="/stages" element={<Stages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
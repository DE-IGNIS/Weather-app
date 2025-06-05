import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CityWeather from "./pages/CityWeather.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<CityWeather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

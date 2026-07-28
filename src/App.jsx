import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import fondo from "./assets/Fondo3.jpg";
import Hero from "./Components/Hero";
import VerseCard from "./Components/VerseCard";
import Contacto from "./Components/Contacto";
import About from "./Components/About";

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${fondo})` }}
        >
        <Navbar />
        <Hero />
        <VerseCard />
        <About />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;
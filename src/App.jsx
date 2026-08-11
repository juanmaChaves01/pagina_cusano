import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import VerseCard from "./Components/VerseCard";
import Contacto from "./Components/Contacto";
import About from "./Components/About";

function App() {
  return (
    <>
<div className="hero min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed ">
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
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToogleTheme from "./components/ToogleTheme";
function App() {
  return (
    <div>
      <Navbar />
      <ToogleTheme />
      <Hero />
      <Card />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;

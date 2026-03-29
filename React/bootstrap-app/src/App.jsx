import Cards from "./components/Cards";
import Hero from "./components/Hero";
import MyNavbar from "./components/Navbar";
import Contact from "./components/Form";
import MyModal from "./components/Modal";
import Footer from "./components/Footer";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import AccordionDemo from "./components/Accordion";
import TabsDemo from "./components/Tabs";
function App() {
  return (
    <div>
      <MyNavbar />
      <Hero />
      <Cards />
      <div className="container py-5">
        <h2 className="text-center mb-4">UI Componnets</h2>
        <TabsDemo />
        <Alerts />
        <Badges />
        <AccordionDemo />
      </div>
      <MyModal />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;

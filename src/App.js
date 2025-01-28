import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./compontes/NavBar";
import { Banner } from "./compontes/Banner";
import { Skills } from "./compontes/Skills";
import { Projects } from "./compontes/Projects";
import { Contact } from "./compontes/Contact";
import { Footer } from "./compontes/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;

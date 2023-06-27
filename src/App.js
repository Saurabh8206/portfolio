import "./App.css";
import Banner from "./components/Banner/Banner";
import Resume from "./components/Resume/Resume";
import Contact from "./components/contact/Contact";
import { Navbar } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="w-full bg-bodyColor text-lightText h-auto">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;

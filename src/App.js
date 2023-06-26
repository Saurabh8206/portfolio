import "./App.css";
import Banner from "./components/Banner/Banner";
// import Features from "./components/Features/Features";
import { Navbar } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="w-full bg-bodyColor text-lightText h-auto">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        {/* <Features /> */}
        <Projects/>
      </div>
    </div>
  );
}

export default App;

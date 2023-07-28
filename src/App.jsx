import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white dark:bg-primary">
        <div
          // style={{ "--image-url": `url(${fetchedUrl})` }}
          className="bg-hero-pattern_light dark:bg-hero-pattern bg-cover bg-no-repeat bg-center" 
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <Experience />
          <Tech />
          <Projects />
          {/* <Feedbacks /> */}
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

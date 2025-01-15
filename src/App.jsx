import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <div className="dark:bg-[#1D1E24] bg-white dark:text-[#fff] font-protest">
      <Navbar />
      <section id="home">
        <Profile />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <GetInTouch />
      </section>
    </div>
  );
}

export default App;

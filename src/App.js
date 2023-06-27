import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import "./App.css";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Name">
        
          <p>Jethro Block</p> 
        </div>
        <div className="Contact">
        <Contact />
        </div>

        <div className="SkillsAndProjects">
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;

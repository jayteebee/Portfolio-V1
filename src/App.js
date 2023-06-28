import Contact from "./Components/Contact";
import "./App.css";
import P1 from "./Components/Projects/P1";
import P2 from "./Components/Projects/P2";
import P3 from "./Components/Projects/P3";
import P4 from "./Components/Projects/P4";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <NavBar />
      <div className="intro">
      <p>Hi, I'm</p>
      </div>
        <div className="Name">
          <p>Jethro Block,</p>
        </div>
        <div className="outro" >A Junior Full Stack Developer.</div>
        
        <div className="Contact">
          <Contact />
        </div>

        <div className="fc AboutMe">
        <AboutMe />
        </div>
        <div className="fc P1">
        <P1 />
        
        </div>

        <div className="fc P2">
        <P2 />
        </div>

        <div className="fc P3">
        <P3 />
        </div>

        <div className="fc P4">
        <P4 />
        </div>
      
      </div>
    </div>
  );
}

export default App;

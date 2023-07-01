import Contact from "./Components/Contact";
import "./App.css";
import P1 from "./Components/Projects/P1";
import P2 from "./Components/Projects/P2";
import P3 from "./Components/Projects/P3";
import P4 from "./Components/Projects/P4";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import tictactoe from "./Logos/tic-tac-toe.png";
import dumbbell from "./Logos/dumbbells.png";
import football from "./Logos/football.png";
import money from "./Logos/money-bag.png";

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
        <div className="outro">A Junior Full Stack Developer.</div>
     

        <div id="ContactScroll" className="Contact">
          <Contact />
        </div>

        <div id="AboutScroll" className="fc AboutMe">
          <AboutMe />
        </div>

        <div id="ProjectScroll" className="fc P1">
          <P1 />
        </div>

        <div className="ttt">
          <img className="Logo" src={tictactoe} alt="tictactoe logo"></img>
        </div>

        <div className="fc P2">
          <P2 />
        </div>

        <div className="db">
          <img className="Logo" src={dumbbell} alt="dumbbell logo"></img>
        </div>

        <div className="fc P3">
          <P3 />
        </div>

        <div className="football">
          <img className="Logo" src={football} alt="football logo"></img>
        </div>

        <div className="fc P4">
          <P4 />
        </div>

        <div className="money">
          <img className="Logo" src={money} alt="money logo"></img>
        </div>

        <div id="SkillsScroll" className="fc Skills">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;

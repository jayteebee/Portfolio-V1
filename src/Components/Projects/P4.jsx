import React from "react";
import readMeIcon from "../../Logos/reading.png";
import deployedIcon from "../../Logos/OpenNewTab.svg";

const P4 = () => {
  return (
    <div className="PContainer">
      <h3 className="PH">Project 4 - Fantasy Finance</h3>
      
      <div className="PP">
        <p>HTML</p>
        <p>JavaScript</p>
        <p>CSS</p>
        <p>React</p>
      </div>
      <div className="PP2">
        <p>SQL / PostgreSQL</p>
        <p>Rails</p>
        <p>Devise</p>
      </div>
      <div className="PD">
        <p>My second Full Stack App, this time completed solo.</p>
        <p>
          The app allows beginner stock traders to test out their trading
          strategies in a risk free environment.
        </p>
      </div>

      <div className="PL">
        <a
          href="https://github.com/jayteebee/fantasyFinance/blob/main/README.md"
          rel="noreferrer"
          target="_blank"
        >
        <img src={readMeIcon} alt="readme icon" />

        </a>
        <a
          href="https://fantasy-finance-fe-416b523c0162.herokuapp.com/"
          rel="noreferrer"
          target="_blank"
        >
        <img src={deployedIcon} alt="deployed icon" />

        </a>
      </div>
    </div>
  );
};

export default P4;

import React from "react";
import readMeIcon from "../../Logos/reading.png";
import deployedIcon from "../../Logos/OpenNewTab.svg";

const P1 = () => {
  return (
    <div className="PContainer">

      <div>
        <h3 className="PH">Project 1 - Tic Tac Toe</h3>

        <div className="PP">
          <p>HTML</p>
          <p>JavaScript</p>
          <p>CSS</p>
        </div>
      </div>

      <div className="PD">
        <p>
          This project was built in 1 week and represents my first app build.{" "}
        </p>
        <p> It's a classic game of Tic-Tac-Toe with an 80's twist. </p>
      </div>

      <div className="PL">
      
        <a
          href="https://github.com/jayteebee/Project-TTT/blob/master/readme.md"
          rel="noreferrer"
          target="_blank"
        >
          <img src={readMeIcon} alt="readme icon" />
        </a>
        <a
          href="https://jayteebee.github.io/Project-TTT/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={deployedIcon} alt="deployed icon" />
        </a>

      </div>

    </div>
  );
};

export default P1;

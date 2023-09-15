import React from "react";
import readMeIcon from "../../Logos/reading.png";
import deployedIcon from "../../Logos/OpenNewTab.svg";

const P3 = () => {
  return (
    <div className="PContainer">
      <h3 className="PH">Project 3 - Football Friends</h3>

      <div className="PP">
        <p>HTML</p>
        <p>JavaScript</p>
        <p>CSS</p>
        <p>React</p>
      </div>

      <div className="PP2">
        <p>Express</p>
        <p>MongoDB</p>
        <p>Mongoose</p>
        <p>Passport</p>
      </div>

      <div className="PD">
        <p>
          My first team project and Full Stack MERN app, completed within 9
          days. The app aims to help Football Fans to find and meet each other,
          sharing admired players as a common interest.
        </p>
        <p>
          As a team we were also able to implement authentication, which was a
          great achievement for us.
        </p>
      </div>

      <div className="PL">
        <a
          href="https://github.com/jayteebee/Football-Friends/blob/JB-Dev/completeREADME.md"
          rel="noreferrer"
          target="_blank"
        >
          <img src={readMeIcon} alt="readme icon" />
        </a>

        <a
        href="https://football-friends.vercel.app/" // working
        rel="noreferrer"
        target="_blank"
      >
      <img src={deployedIcon} alt="deployed icon" />
      </a>
      </div>
    </div>
  );
};

export default P3;

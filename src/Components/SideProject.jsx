import React from "react";
import readMeIcon from "../Logos/reading.png";

const SideProject = () => {
  return (
    <div className="PContainer">
      <h3 className="PH">Side Project - Workout App</h3>
      
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
        <p>
          After completing the bootcamp I immediately started work on the Workout App from Project 2. This time, It will have a fully functioning backend allowing users to create workouts, routines and exercises. Schedule and reschedule, log and share all their sessions. 
        </p>
        <p>I'm loving working on this and can't wait to use the finished app! I will release it on the Play Store as soon as possible.</p>
      </div>
      <div className="PL">
      <a
        href="https://github.com/jayteebee/workout-app"
        rel="noreferrer"
        target="_blank"
      >
      <img src={readMeIcon} alt="readme icon" />
      </a>
    
    </div>

    </div>
  );
};

export default SideProject;

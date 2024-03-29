import React from "react";
import readMeIcon from "../../Logos/reading.png";
import deployedIcon from "../../Logos/OpenNewTab.svg";

const P2 = () => {
  return (
    <div className="PContainer">
      <h3 className="PH">Project 2 - Workout Planner</h3>
      
      <div className="PP">
        <p>HTML</p>
        <p>JavaScript</p>
        <p>CSS</p>
        <p>React</p>
      </div>

      <div className="PD">
        <p>
          An app created to help people plan their workout schedules and create
          specific workouts.
        </p>
        <p>
          Users can create, update and delete exercises and workouts to fit into
          their plan.
        </p>
        <p>
          I have since come back to rebuild this project with a view to
          launching it as an official app.
        </p>
      </div>
      <div className="PL">
      <a
        href="https://github.com/jayteebee/workout_planner/blob/main/workout_planner/src/readme.md"
        rel="noreferrer"
        target="_blank"
      >
      <img src={readMeIcon} alt="readme icon" />
      </a>
      <a
        href="https://jayteebee.github.io/workout_planner/"
        rel="noreferrer"
        target="_blank"
      >
      <img src={deployedIcon} alt="deployed icon" />
        
      </a>
    </div>

    </div>
  );
};

export default P2;

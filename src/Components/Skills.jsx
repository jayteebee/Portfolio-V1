import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Other from "./Other";
import SoftSkills from "./SoftSkills";

const Skills = () => {
  return (
    <div className="PContainer3">
      <div className="frontEnd">
        <Frontend />
      </div>

      <div className="backEnd">
        <Backend />
      </div>

      <div className="softSkills">
        <SoftSkills />
      </div>

      <div className="other">
        <Other />
      </div>
    </div>
  );
};

export default Skills;

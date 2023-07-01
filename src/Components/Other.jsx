import React from 'react'
import cliLOGO from "../Logos/cliLOGO.svg";
import githubLOGO from "./icons8-github.svg"


const Other = () => {
  return (
    <div className="skillOrientation">
    <div className="logoWrapper">
        <img className="Logo" src={cliLOGO} alt="cli logo"></img>
        <p>CLI</p>
      </div>

      <div className="logoWrapper">
      <img className="Logo" src={githubLOGO} alt="github logo"></img>
      <p>GitHub</p>
    </div>
    </div>
  )
}

export default Other
import React from "react";
import htmlLOGO from "../Logos/HTML-LOGO.svg";
import jsLOGO from "../Logos/jsLOGO.svg";
import reactLOGO from "../Logos/reactLOGO.svg";
import rubyLOGO from "../Logos/rubyLOGO.svg";
import cssLOGO from "../Logos/cssLOGO.svg";

const Frontend = () => {
  return (
    <div><h3>Technologies</h3>
    <div className="skillOrientation">
      <div className="logoWrapper">
        <img className="Logo" src={htmlLOGO} alt="html logo"></img>
        <p>HTML</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={jsLOGO} alt="js logo"></img>

        <p>JavaScript</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={cssLOGO} alt="css logo"></img>

        <p>CSS</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={reactLOGO} alt="react logo"></img>

        <p>React</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={rubyLOGO} alt="ruby logo"></img>
        <p>Ruby</p>
      </div>
    </div>
    </div>
  );
};

export default Frontend;

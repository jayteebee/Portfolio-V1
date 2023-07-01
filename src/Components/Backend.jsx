import React from "react";
import expressLOGO from "../Logos/expressLOGO.svg";
import mongoLOGO from "../Logos/MongoLOGO.svg";
import mongooseLOGO from "../Logos/mongooseLOGO.svg";
import sqlLOGO from "../Logos/sqlLOGO.svg";
import postgresqlLOGO from "../Logos/postgresqlLOGO.svg";
import railsLOGO from "../Logos/railsLOGO.svg";

const Backend = () => {
  return (
    <div className="skillOrientation">
      <div className="logoWrapper">
        <img className="Logo" src={expressLOGO} alt="express logo"></img>
        <p>Express</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={mongoLOGO} alt="mongo logo"></img>
        <p>MongoDB</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={mongooseLOGO} alt="mongoose logo"></img>
        <p>Mongoose</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={sqlLOGO} alt="sql logo"></img>

        <p>SQL</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={postgresqlLOGO} alt="postgresql logo"></img>

        <p>PostgreSQL</p>
      </div>
      <div className="logoWrapper">
        <img className="Logo" src={railsLOGO} alt="rails logo"></img>

        <p>Rails</p>
      </div>
    </div>
  );
};

export default Backend;

import React from "react";
import liviu from "../Components/liviusq.jpg";
import "./content.css";
import phtml from "./html.png";

function Content() {
  return (
    <div id="content-box">
      <div className="info-box">
        <h1>
          Welcome to my Page <br /> in development...
        </h1>
        <div className="study">
          <h2>Currently studying</h2>

          <img className="phtml" src={phtml} />
        </div>
      </div>

      <div className="f-box">
        <img className="liviu" src={liviu} />
        <div className="name">Liviu Savciuc</div>
      </div>
    </div>
  );
}

export default Content;

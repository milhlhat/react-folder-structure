import React from "react";
import ReactDOM from "react-dom";
import DumbellLogo from "./assets/icon/dumbbell.png"
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: folder-structure</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <img src={DumbellLogo} alt="dumbbell" />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

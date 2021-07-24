import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Clock from "./Projects/clock-first-prj/clock" // PROJECT 1
import MoveMario from "./Projects/move-mario-state/move-mario" //PROJECT 2
import Carrer from "./Projects/Carrer-Guidace/Carrer"


function ShowReactDOM() {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <Clock /> */}
      {/* <MoveMario /> */}
      <Carrer/>
      
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// React DOM compares the element and its children to the previous one,
//  and only applies the DOM updates necessary to bring the DOM to the desired state.
// only time will be changes in Clock prj1
// uncomment for prj Clock
// setInterval(ShowReactDOM , 1000) // calls every sec to render dom by comparing it with previous one.


ShowReactDOM()


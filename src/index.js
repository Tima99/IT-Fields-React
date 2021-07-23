import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Clock from "./Projects/clock-first-prj/clock" // PROJECT 1


function ShowReactDOM() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      {/* <Clock /> */}
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


// State allows React components to change their output 
// over time in response to user actions, network responses, and anything else,

// State is similar to props, but it is private and fully controlled by the component.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hours = date.getHours();
const hour = Number(hours);
let welcome = "";
let heading = "";

function selectMsg(hour) {
  if (hour >= 0 && hour <= 12) {
    welcome = "Good Morning!";
    heading = "morning";
  }
  if (hour >= 12 && hour <= 18) {
    welcome = "Good Afternnon!";
    heading = "afternoon";
  } else {
    welcome = "Good Evening!";
    heading = "night";
  }
  return { welcome, heading };
}

const msg = selectMsg(hour);

console.log(msg);

ReactDOM.render(
  <div>
    <h1 className={msg.heading}>{welcome}</h1>
  </div>,

  document.getElementById("root")
);

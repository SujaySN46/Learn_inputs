import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>hello world!</h1>
    <p>this is a paragraph</p>
    <br />
    <label>name</label>
    <input type="text" name="input1"></input>
    <br />
    <label>Password</label>
    <input type="text" name="password"></input>
    <br />
    <input type="submit"></input>
  </div>,
  document.getElementById("root")
);

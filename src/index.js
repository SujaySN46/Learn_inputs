import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div style={{ margin: 10 + "px" }}>
    <h1 style={{ color: "red" }}>hello world!</h1>
    <p>this is a paragraph</p>
    <br />
    <label>name</label>
    <br />
    <input type="text" name="input1"></input>
    <br />
    <label>Password</label>
    <br />
    <input type="text" name="password"></input>
    <br />
    <input type="submit" style={{ margin: 10 + "px" }}></input>
  </div>,
  document.getElementById("root")
);

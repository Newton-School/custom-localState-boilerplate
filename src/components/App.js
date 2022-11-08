import React, { useState } from "react";
import "../styles/App.css";
import useLocalStorage from "./useLocalStorage";

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();

    

  };

  return (
    <div id="main">
      <label>Enter a Value to save in localStorage</label>
      <input type="text" id="value"  />
      <button id='set' onClick={submitHandler}>Set Value</button>
    </div>
  );
};

export default App;

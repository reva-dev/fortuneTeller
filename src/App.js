import React from "react";
import fortunelist from "./fortunelist.json";
import "./App.css";
// import './mysass.scss';

function App() {
  const today = fortunelist[Math.floor(Math.random() * 356)];
  return (
    <div className='App'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
        <span>{today}</span>
      </div>
    </div>
  );
}

export default App;

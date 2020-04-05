import React from 'react';
import fortunelist from './fortunelist.json';
import './App.css';

function App() {
 
 const today = fortunelist[Math.floor( Math.random() * (356) )];
  return (
    <div className="App">
      {today}
    </div>
  );
}

export default App;

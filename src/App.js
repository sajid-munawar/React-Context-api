import React from 'react';
import Parent from "./Parent.js"
import './App.css';
import CounterContext from "./CounterContext"

function App() {
  return (
    <CounterContext.Provider value={10}>
      <div >
     
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

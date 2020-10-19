import React, { useState } from 'react';
import Parent from "./Parent.js"
import './App.css';
import CounterContext from "./CounterContext"

function App() {
  let countState = useState(10) // c[count , set]
  return (
    <CounterContext.Provider value={countState}>
      <div >
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

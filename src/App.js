import React, { useState } from 'react';
// import Parent from "./Parent.js"
import './App.css';
import CounterContext from "./CounterContext"
import Another from "./Another"

function App() {
  let countState=useState(10) // c[count , set]
  return (
    <CounterContext.Provider value={countState}>
      <div >
        <Another/>

        {/* <Parent /> */}
      </div>
    </CounterContext.Provider>
  );
}

export default App;

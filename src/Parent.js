import React, { useContext }   from "react";
import Child from "./Child.js"

import Child2 from "./Child2.js"
import "./CounterContext"
import CounterContext from "./CounterContext";
import counterReducer from "./CounterReducer.js";

const Parent = () => {
    // let counterValuee=useContext(CounterContext)
    return <div>
        <Child />
        <Child2/>
        {/* <h1>This is Parent {counterValuee}</h1> */}
        {/* <button onClick={() => { counterValuee[1](++counterValuee[0]) }} >Increament from p1</button> */}
        


        {/* <button onClick={()=> counterValuee[1](counterValuee[0]+2)} >Increament by 2</button> */}
        </div>
}

export default Parent;
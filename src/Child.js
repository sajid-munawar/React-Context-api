import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {

    let counterValuee = useContext(CounterContext)
   

    return <div>
        <h1>This is counter Value from context {counterValuee}</h1>
        <button onClick={() => { counterValuee[1](++counterValuee[0]) }} >Increment</button>
        <button onClick={() => { counterValuee[1](--counterValuee[0]) }} >Decrement</button>

    </div>
}


export default Child;
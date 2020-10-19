import React from "react";
import { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2 = () => {
    let [state,dispach]=useReducer(counterReducer,10)
    return <div>
        <h1>Using Reducer The value of state is : {state} </h1>
        <button onClick={()=>{dispach('INCREMENT')}} >Increment</button>
        <button onClick={()=>{dispach('DECREMENT')}} >Decrement</button>
   
    </div>

}

export default Child2;
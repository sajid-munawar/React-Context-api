import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return <div>
        <h1> Hii </h1>
        <h1>This is counterValue {counterValue} </h1>
    </div>

}

export default Child;
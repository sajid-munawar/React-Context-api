import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Another = () => {
    let abc = useContext(CounterContext)
    return <div>
        <h1> 
            This is from another {abc}
        </h1>
        <button onClick={()=>{abc[1](++abc[0])}}>Increament</button>

    </div>

}
export default Another;

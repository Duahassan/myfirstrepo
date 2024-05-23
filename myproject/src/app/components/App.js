import React from "react";
import { useContext } from "react";
import Counter from "./components/Counter";
import {Countercontext} from "./context/Counter";

function App(){
    const counterState=useContext(Countercontext);
    console.log("context", counterState);
    return(
        <div className="App">
            <h1>Count Is 0</h1>
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    )
}
export default App;
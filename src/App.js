import React, {useState} from "react";
const App = () => {
    const [state, setstate] = useState(0);
    function increment(){
        setstate(state+1);
    }
    function decrement(){
        setstate(state-1);
        // document.body.style.display="disable";
    }
    function reset(e){
        setstate(0);
    }

    
    
return(
    <div className="hero">
        <h1>Counter App</h1>
        <button className="increbtn" onClick={increment}>Increment</button>
        <h2>{state}</h2>
        <button className="decbtn" disabled={state==0 ? true : false} onClick={decrement}>Decrement</button>
        <div>
        <button className="resetbtn" onClick={reset}>Reset</button>
        </div>
    </div>
);
};
export default App;
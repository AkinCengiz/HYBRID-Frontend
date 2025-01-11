import { useState } from "react";

function Counter() {
    let counter = 0;
    const [stateCounter, setStateCounter] = useState(0);
    const [deneme,setDeneme] = useState(["İstanbul","İzmir","Ankara"]);
    function handleClick(){
        console.log("Handle click button click...")
        counter++;
        console.log(counter);
    }
    function stateHandleClick(){
        console.log("State Handle Click...");
        setStateCounter(stateCounter + 1);
    }
    function newCities(){
        setDeneme([...deneme,"Sakarya"]);
    }
  return (
    <>
        <h2>Counter : {counter}</h2>
        <h2>StateCounter : {stateCounter}</h2>
        <ul>
            {
                deneme.map((item,index) => <li key={index}>{item}</li>)
            }
        </ul>
        <button id="increment" onClick={() => console.log("Button click...")}>Increment</button>
        <button id="increment2" onClick={handleClick}>Increment</button>
        <button id="stateIncrement" onClick={() => setStateCounter(stateCounter + 1)}>Increment</button>
        <button id="stateIncrement" onClick={stateHandleClick}>Increment</button>
        <button id="stateIncrement" onClick={newCities}>Increment</button>
    </>
  )
}

export default Counter
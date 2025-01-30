import { useState } from "react"


export default function SecondCounter() {
    const [count,setCount] = useState(0);

  function increment(){
    setCount(prev => prev + 1);
  }
  function decrement(){
    setCount(prev => prev - 1);
  }
  function reset(){
    setCount(0);
  }
  return (
    <>
      <h2>2. Yöntem</h2>
      <h3>Conter : {count}</h3>
      <button onClick={decrement}> - </button>
      <button onClick={reset}>RESET</button>
      <button onClick={increment}> + </button>
      <hr/>
    </>
  )
}

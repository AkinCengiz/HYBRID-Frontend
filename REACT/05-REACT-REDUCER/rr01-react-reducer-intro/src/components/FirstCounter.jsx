import { useState } from "react"


export default function FirstCounter() {
    const [count,setCount] = useState(0);
  return (
    <>
      <h2>1. Yöntem</h2>
      <h3>Conter : {count}</h3>
      <button onClick={() => setCount(prev => prev - 1)}> - </button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(prev => prev + 1)}> + </button>
      <hr />
    </>
  )
}

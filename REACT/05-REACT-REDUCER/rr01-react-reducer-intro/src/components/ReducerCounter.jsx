import { useReducer } from "react"
import { countReducer, DECREMENT, INCREMENT, initialCount, RESET, SQUARE, TWODECREMENT, TWOINCREMENT } from "../reducers/counter";


function ReducerCounter() {
    const [counter,dispatch] = useReducer(countReducer,initialCount);
  return (
    <>
    <h2>3. Yöntem - REDUCER</h2>
      <h3>Conter : {counter}</h3>
      <button onClick={() => dispatch(TWODECREMENT)}> -2 </button>
      <button onClick={() => dispatch(DECREMENT)}> - </button>
      <button onClick={() => dispatch(RESET)}>RESET</button>
      <button onClick={() => dispatch(INCREMENT)}> + </button>
      <button onClick={() => dispatch(TWOINCREMENT)}> +2 </button>
      <button onClick={() => dispatch(SQUARE)}> KARESİ </button>
      <button onClick={() => dispatch("tanimsiz")}> TANIMSIZ METOT </button>
    </>
  )
}

export default ReducerCounter
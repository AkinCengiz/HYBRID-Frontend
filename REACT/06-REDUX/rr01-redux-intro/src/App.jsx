import { useDispatch, useSelector } from "react-redux";
import { added, decrement, increment, reset, subscribe } from "./store/counter/counterSlice"
import ToDoForm from "./components/todo/ToDoForm";

function App() {
  const value = useSelector(store => store.counter.value);
  console.log(value)
  const dispatch = useDispatch();

  return (
    <>
      <h1>REDUX TOOLKIT</h1>
      <h3>Counter : {value}</h3>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <br />
      <hr />
      <br />
      <input type="number" id="number" />
      <button onClick={() => dispatch(subscribe(Number(document.getElementById("number").value)))}>SUBSCRIBE</button>
      <button onClick={() => dispatch(added(Number(document.getElementById("number").value)))}>ADDED</button>
      <hr />
      <h2>TODO List</h2>
      <ToDoForm />
    </>
  )
}

export default App

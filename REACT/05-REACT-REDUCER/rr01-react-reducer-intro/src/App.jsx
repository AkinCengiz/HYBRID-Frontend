import { useReducer } from "react"
import Counter from "./components/Counter"
import { ADD, DELETE, initialValue, todoReducer } from "./reducers/todos/todos"
import TodoForm from "./components/todos/TodoForm";


function App() {
  
  const [todo,dispatch] = useReducer(todoReducer,initialValue);
  return (
    <>
      <TodoForm/>
      <hr />
      <Counter />
      <h1>TODO</h1>
      <h3>TODO : {todo.count}</h3>
      <button onClick={() => dispatch({type:DELETE,payload:5})}>-</button>
      <button onClick={() => dispatch({type:ADD,payload:3})}>+</button>
    </>
  )
}

export default App

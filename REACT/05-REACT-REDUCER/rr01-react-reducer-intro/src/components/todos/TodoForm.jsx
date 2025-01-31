import { useReducer } from "react"
import { initialTodo, toDoReducer } from "../../reducers/todo/todo"
import { ADD_TODO, REMOVE_TODO } from "../../reducers/todo/actionTypes";
import { RESET } from "../../reducers/counter";

function TodoForm() {
    const [myTodos,dispatch] = useReducer(toDoReducer,initialTodo)

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.elements[0].value;
        console.log(inputValue);
        dispatch({type : ADD_TODO,payload : inputValue});
        e.target.reset();
    }

  return (
    <>
        <hr />
        <h3>To Do Form</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">ADD</button>
        </form>
        <ul>
            {
                myTodos.todos.map(todo => <li key={todo.id} onClick={() => dispatch({type : REMOVE_TODO,payload : todo.id})}>{todo.title} - {todo.id}</li>)
            }
        </ul>
        <br />
        <button onClick={() => dispatch({type : RESET})}>RESET</button>
    </>
  )
}

export default TodoForm
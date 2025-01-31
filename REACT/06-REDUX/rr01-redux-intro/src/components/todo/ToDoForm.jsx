import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, reset } from "../../store/todo/todoSlice";

function ToDoForm() {
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        const inputValue = e.target.elements[0].value;
        dispatch(addTodo(inputValue));
        e.target.reset();
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Add Todo</button>
        </form>
        <hr />
        <button onClick={() => dispatch(reset())}>RESET</button>
        <ul>
            {
                todos.map((todo,index) => <li key={index} onClick={() => dispatch(removeTodo(index))}>{todo}</li>)
            }
        </ul>
    </>
  )
}

export default ToDoForm
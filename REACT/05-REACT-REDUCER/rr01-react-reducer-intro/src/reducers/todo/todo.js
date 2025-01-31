import { ADD_TODO, REMOVE_TODO, RESET } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';


export const initialTodo = {
    todos : []
};

export const toDoReducer = (state,action) => {
    switch(action.type){
        case ADD_TODO :
            return {
                ...state,todos : [
                    ...state.todos,{id : uuidv4(), title : action.payload }
                ]
            };
        case REMOVE_TODO :
            {
                const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
                return {...state, todos : filteredTodos}
            }
        case RESET :
            return initialTodo;
        default :
            return state;
    }
}

//const numbers = [1,2,3];
//const numbers2 = [...numbers,6,9,11] => [1,2,3,   6,9,11]

// const user = {name:"akın",email : "akincengiz@msn.com",age:42}
// const { user, name } = user
// console.log(name);
import { INCREMENT, DECREMENT,TWODECREMENT,TWOINCREMENT,RESET,SQUARE } from "./actionTypes";


const initialCount = 0;

const countReducer = (state,action) => {
    switch(action){
        case INCREMENT :
            console.log(action)
            return state + 1;
        case DECREMENT :
            console.log(action)
            return state - 1;
        case RESET :
            console.log(action)
            return initialCount;
        case TWODECREMENT :
            console.log(action)
            return state - 2;
        case TWOINCREMENT :
            console.log(action)
            return state + 2;
        case SQUARE :
            console.log(action)
            return state * state;
        default :
            console.log(action)
            return state;
    }
}

export { initialCount, countReducer}
 
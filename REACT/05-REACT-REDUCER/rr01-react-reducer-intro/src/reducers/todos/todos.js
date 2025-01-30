const ADD = "ADD";
const DELETE = "DELETE";

const initialValue = { count : 0 };

function todoReducer(state,action){
    switch(action.type){
        case ADD : 
            return { count : state.count + action.payload};
        case DELETE :
            return { count : state.count - action.payload}
        default :
            return state;
    }
}

export {ADD,DELETE,initialValue,todoReducer}

const initialState = [{
    id: 1,
    todo: "Arreglar el celular",
    done: false
}]

const todoReducer = ( state = initialState, action ) => {

    if(action?.type === "Add" ){
        return [...state, action.payload ]
    }

    return state;

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "Ir de compras",
    done: false
}

const newAction = {
    type: "Add",
    payload: newTodo
}

todos = todoReducer( todos, newAction );

console.log(todos);
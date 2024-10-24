import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            Todo:"Todo msg",
            completed:false,
        }
],
    // functionalities for Todos.
    AddTodos:(Todo)=>{},
    UpdateTodos:(id,Todo)=>{},
    DeleteTodos:(id)=>{},
    ToggleComplete:(id)=>{},

})


export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
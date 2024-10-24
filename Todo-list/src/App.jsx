import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForms'
import TodoItem from './components/TodoItems'

function App() {
  const [todos, setTodos] = useState([])

  const AddTodos = (Todo) => {
    setTodos((prev) => [{id: Date.now(), ...Todo}, ...prev] )
  }

  const UpdateTodos = (id, Todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? Todo : prevTodo )))

    
  }

  const DeleteTodos = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const ToggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, AddTodos, UpdateTodos, DeleteTodos, ToggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
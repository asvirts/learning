import { useState } from "react"
import { Todo } from "../types/types"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo"

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(title: string) {
    setTodos([...todos, { id: Date.now(), title: title, completed: false }])
  }

  function handleToggleComplete(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} />
      <CreateTodo onAddTodo={handleAddTodo} />
    </div>
  )
}

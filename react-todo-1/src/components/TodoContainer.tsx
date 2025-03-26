import { useState } from "react"
import { Todo } from "../types/types"
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo"

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(title: string) {
    setTodos([...todos, { id: Date.now(), title: title, completed: false }])
  }

  function handleDeleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      <CreateTodo onAddTodo={handleAddTodo} />
    </div>
  )
}

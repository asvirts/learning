import { useState } from "react"
import { Todo } from "../types/types"
import TodoList from "./TodoList"

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  )
}

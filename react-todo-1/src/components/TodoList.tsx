import { Todo } from "../types/types"
import TodoItem from "./TodoItem"
interface TodoListProps {
  todos: Todo[]
  onToggleComplete: (id: number) => void
}

export default function TodoList({ todos, onToggleComplete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  )
}

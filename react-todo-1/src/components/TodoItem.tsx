import { Todo } from "../types/types"
interface TodoItemProps {
  todo: Todo
  onToggleComplete: (id: number) => void
}

export default function TodoItem({ todo, onToggleComplete }: TodoItemProps) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      {todo.title}
    </li>
  )
}

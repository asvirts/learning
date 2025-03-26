import { Todo } from "../types/types"
import TodoItem from "./TodoItem"
interface TodoListProps {
  todos: Todo[]
  onDeleteTodo: (id: number) => void
}

export default function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  )
}

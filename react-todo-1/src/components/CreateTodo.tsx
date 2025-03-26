import React, { useState } from "react"

export default function CreateTodo({
  onAddTodo
}: {
  onAddTodo: (title: string) => void
}) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onAddTodo(title)
    setTitle("")
    console.log(title)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

import { useBoardUseCase } from "@context/boardContext"
import { Board } from "@domain/entities/board"
import { FormEvent, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const BoardForm = () => {
  const [name, setName] = useState<string>('')
  const boardUseCase = useBoardUseCase()
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    console.log("Guardando board", name)
    const board = new Board(name, [], uuidv4())
    await boardUseCase.save(board)
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          id="title"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default BoardForm

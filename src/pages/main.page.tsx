import { Board } from "@domain/entities/board";
import { FormEvent, useState } from "react";
import { useBoardUseCase } from "@context/boardContext";

function MainPage() {
  const [name, setName] = useState<string>('')
  const boardUseCase = useBoardUseCase()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    console.log("Guardando board", name)
    const board = new Board(name, [])
    await boardUseCase.save(board)
  }
  return (
    <>
      <header></header>
      <main>
        <article>Mi mini trello</article>
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
      </main>
    </>
  )
}

export default MainPage;

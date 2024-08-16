import { boardUseCase } from "@context/boardContext"
import { Board } from "@domain/entities/board"
import { useLoaderData } from "react-router-dom"

export async function loader() {
  const boards = await boardUseCase.get()
  return { boards }
}

interface BoardsResult {
  boards: Board[]
}
export const BoardsMainPage = () => {
  const { boards } = useLoaderData() as BoardsResult;
  return (
    <>
      <article>
        {boards.map((board) => {
          return (
            <section>{board.getTitle()}</section>
          )
        })
        }
      </article>
    </>
  )
}

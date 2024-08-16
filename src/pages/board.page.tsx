import { boardUseCase } from "@context/boardContext"
import { Board } from "@domain/entities/board"
import { useLoaderData } from "react-router-dom"

interface BoardParams {
  params: {
    boardId: string
  }
}

export async function loader({ params }: BoardParams) {
  const board = await boardUseCase.getById(params.boardId)
  return { board }
}

interface BoardResult {
  board: Board
}

export const BoardPage = () => {
  const { board } = useLoaderData() as BoardResult;
  return (
    <>
      <article>{board.getTitle()}</article>
      <article>
      </article>
    </>
  )
}

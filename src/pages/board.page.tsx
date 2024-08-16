import { boardUseCase } from "@context/boardContext"
import { Board } from "@domain/entities/board"
import { useLoaderData } from "react-router-dom"

export async function loader(param: any) {
  const board = await boardUseCase.getById(param.boardId)
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

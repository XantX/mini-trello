import { Board } from "@domain/entities/board";
import { BoardRepository } from "@domain/repository/ports/boardRepository";
import { BoardsResponse } from "../schemas/boards";
import { localStorageNames } from "@domain/constant/enum.localstorage";

export class BoardRepositoryLocalStorage implements BoardRepository {

  async save(board: Board): Promise<Board> {
    return new Promise<Board>((resolve, _reject) => {
      const data = localStorage.getItem(localStorageNames.BOARDS)
      if (data == null) {
        localStorage.setItem('boards', JSON.stringify(new BoardsResponse([board])))
      } else {
        const boards = this.parseBoards(JSON.parse(data))
        boards.addBoard(board)
        localStorage.setItem('boards', JSON.stringify(boards))
      }
      resolve(board)
    })
  }
  update(_board: Board): Promise<Board> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<Board>;
  get(): Promise<Board[]>;
  async get(_id?: unknown): Promise<Board | Board[]> {
    return new Promise<Board[]>((resolve, _reject) => {
      const data = localStorage.getItem(localStorageNames.BOARDS)
      if (data == null) {
        resolve([])
      } else {
        const parsedBoards = JSON.parse(data)
        const boards = this.parseBoards(parsedBoards)
        resolve(boards.boards)
      }
    })
  }
  delete(_id: string): void {
    throw new Error("Method not implemented.");
  }
  parseBoards(parsedBoards: BoardsResponse): BoardsResponse {
    const boards = parsedBoards.boards.map((boardData: Board) => {
      return new Board(boardData.getTitle(), boardData.getColumns())
    })
    return new BoardsResponse(boards)
  }
}

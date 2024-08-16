import { Board } from "@domain/entities/board";
import { BoardRepository } from "@domain/repository/ports/boardRepository";
import { BoardResponseStorage, BoardsResponse, BoardStorage, ColumnStorage, TaskStorage } from "../schemas/boards";
import { localStorageNames } from "@domain/constant/enum.localstorage";
import { Column } from "@domain/entities/column";
import { Task } from "@domain/entities/task";

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
    return new Promise<Board[] | Board>((resolve, _reject) => {
      const data = localStorage.getItem(localStorageNames.BOARDS)
      if (data == null) {
        resolve([])
      } else {
        const parsedBoards = JSON.parse(data)
        const boards = this.parseBoards(parsedBoards)
        console.log("ID", _id)
        if (_id) {
          const findedBoard = boards.boards.find(board => board.getId() === _id)
          if (findedBoard) {
            console.log("Encontrado", findedBoard)
            resolve(findedBoard)
          } else {
            resolve([])
          }
        } else {
          resolve(boards.boards)
        }
      }
    })
  }
  delete(_id: string): void {
    throw new Error("Method not implemented.");
  }
  parseBoards(parsedBoards: BoardResponseStorage): BoardsResponse {
    const boards = parsedBoards.boards.map((boardData: BoardStorage) => {
      const columns: Column[] = boardData.columns.map((column: ColumnStorage) => {
        const tasks: Task[] = this.parseTask(column.tasks)
        return new Column(column.id, column.title, column.limit, tasks, column.boardId)
      })
      return new Board(boardData.title, columns, boardData.id)
    })
    return new BoardsResponse(boards)
  }
  parseTask(tasks: TaskStorage[]): Task[] {
    return tasks.map((task) => { return new Task(task.id, task.title, task.description, task.columnId, task.boardId) })
  }
}

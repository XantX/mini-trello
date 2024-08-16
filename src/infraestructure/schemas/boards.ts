import { Board } from "@domain/entities/board";

export class BoardsResponse {
  constructor(public boards: Board[]) { }
  public addBoard(board: Board) {
    this.boards.push(board)
  }
}

export type BoardStorage = {
  id: string,
  title: string,
  columns: ColumnStorage[]
}

export type ColumnStorage = {
  id: string,
  title: string,
  limit: string,
  tasks: TaskStorage[],
  boardId: string,
}

export type TaskStorage = {
  id: string,
  title: string,
  description: string,
  columnId: string,
  boardId: string
}

export type BoardResponseStorage = {
  boards: BoardStorage[]
}

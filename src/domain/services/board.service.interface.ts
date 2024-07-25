import { Board } from "@domain/entities/board";

export interface BoardService {
  save(board: Board): Promise<Board>
  update(board: Board): Promise<Board>
  delete(id: string): void
  get(): Promise<Board[]>
}

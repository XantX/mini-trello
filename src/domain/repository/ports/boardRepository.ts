import { Board } from "@domain/entities/board";

export interface BoardRepository {
  save(board: Board): Promise<Board>
  update(board: Board): Promise<Board>
  get(id: string): Promise<Board>
  get(): Promise<Board[]>
  delete(id: string): void
}

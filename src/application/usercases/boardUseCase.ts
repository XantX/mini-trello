import { Board } from "@domain/entities/board";
import { BoardRepository } from "@domain/repository/ports/boardRepository";

export class BoardUseCase {
  constructor(private boardRepository: BoardRepository) { }

  async save(board: Board): Promise<Board> {
    return this.boardRepository.save(board)
  }

  async get(): Promise<Board[]> {
    return this.boardRepository.get()
  }
}

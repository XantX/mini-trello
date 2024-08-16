import { BoardUseCase } from "@application/usercases/boardUseCase";
import { BoardRepositoryLocalStorage } from "@infraestructure/adapter/boardRepositoryLocalStorage";
import { createContext, ReactNode, useContext } from "react";

interface generalContext {
  boardUseCase: BoardUseCase,
}
const BoardUseCaseContext = createContext<generalContext | undefined>(undefined)

interface BoardUseCaseProviderProps {
  children: ReactNode
}

export const boardRepositoryLocalStorage = new BoardRepositoryLocalStorage()
export const boardUseCase = new BoardUseCase(boardRepositoryLocalStorage)

export const BoardUseCaseProvider: React.FC<BoardUseCaseProviderProps> = ({ children }) => {
  return (
    <BoardUseCaseContext.Provider value={{ boardUseCase }}>
      {children}
    </BoardUseCaseContext.Provider>
  )
}

export const useBoardUseCase = (): BoardUseCase => {
  const context = useContext(BoardUseCaseContext)
  if (!context) {
    throw new Error("useBoardService must be used within a BoardServiceProvider")
  }
  return context.boardUseCase
}


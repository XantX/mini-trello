import { BoardUseCase } from "@application/usercases/boardUseCase";
import { BoardRepositoryLocalStorage } from "@infraestructure/adapter/boardRepositoryLocalStorage";
import { createContext, ReactNode, useContext } from "react";

const BoardUseCaseContext = createContext<BoardUseCase | undefined>(undefined)

interface BoardUseCaseProviderProps {
  children: ReactNode
}

export const BoardUseCaseProvider: React.FC<BoardUseCaseProviderProps> = ({ children }) => {
  const boardRepositoryLocalStorage = new BoardRepositoryLocalStorage()
  const boardUseCase = new BoardUseCase(boardRepositoryLocalStorage)
  return (
    <BoardUseCaseContext.Provider value={boardUseCase}>
      {children}
    </BoardUseCaseContext.Provider>
  )
}

export const useBoardUseCase = (): BoardUseCase => {
  const context = useContext(BoardUseCaseContext)
  if (!context) {
    throw new Error("useBoardService must be used within a BoardServiceProvider")
  }
  return context
}

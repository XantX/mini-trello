import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from '@pages/main.page'
import { BoardUseCaseProvider } from '@context/boardContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BoardUseCaseProvider>
      <MainPage></MainPage>
    </BoardUseCaseProvider>
  </React.StrictMode>,
)

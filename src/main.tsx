import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from '@pages/main.page'
import { BoardUseCaseProvider } from '@context/boardContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '@pages/error-page'
import { loader as boardLoader, BoardPage } from '@pages/board.page'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/board/:boardId",
        element: <BoardPage />,
        loader: boardLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BoardUseCaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </BoardUseCaseProvider>
  </React.StrictMode>,
)

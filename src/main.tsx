import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import mainRouter from './routes/MainRouter'



createRoot(document.getElementById('root')!).render(
  <StrictMode> 
      <RouterProvider router={mainRouter} />
  </StrictMode>,
)

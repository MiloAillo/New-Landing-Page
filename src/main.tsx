import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import mainRouter from './routes/MainRouter'
import LocomotiveScroll from 'locomotive-scroll'

const locomotive = new LocomotiveScroll()

addEventListener("resize", () => locomotive.resize())

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
      <RouterProvider router={mainRouter} />
  </StrictMode>,
)

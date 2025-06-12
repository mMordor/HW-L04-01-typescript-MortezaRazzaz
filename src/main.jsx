import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import { routs } from './Constant/Routs'

document.title="حساب کتاب"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routs}/>
  </StrictMode>,
)

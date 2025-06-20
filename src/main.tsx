import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routs } from './Constant/Routs'
import { Provider } from 'react-redux'
import store from './redux'
import './index.css'
document.title="حساب کتاب"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routs}/> 
    </Provider>
  </StrictMode>,
)

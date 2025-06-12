import React from 'react'
import style from './Layout.module.scss'
import {Outlet} from 'react-router-dom'
import NavBar from '../../Components/NavnBar/NavBar'
import Container from '../../Components/Container/Container'
import LayContextsProvider from '../../context'

function Layout() {
  return (
    <LayContextsProvider>
      <div className={style.layout}>
          <NavBar/>
          <Container>
              <Outlet/>
          </Container>
      </div>
    </LayContextsProvider>
    
  )
}

export default Layout
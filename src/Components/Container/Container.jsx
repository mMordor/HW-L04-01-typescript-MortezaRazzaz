import React from 'react'
import style from './Container.module.scss'

function Container({children}) {
  return (
    <div className={style.container_layout}>
      {children}
    </div>
  )
}

export default Container
import React from 'react'
import style from './Filter.module.scss'

function Filter({categories,selectedCategories,setSelectedCategories,searchItem,setsearchItem}) {
    return (
    <div className={style.wraper}>
        <select className={style.options} onChange={(e)=>setSelectedCategories(e.target.value)} value={selectedCategories} >
            <option value={"all"}>همه</option>
            {categories.map((c)=>(
                <option key={c} value={c}>{c}</option>
            ))}
        </select>
        <input type='text' value={searchItem} className={style.search} onChange={(e)=>setsearchItem(e.target.value)} placeholder='نام، توضیحات، ارزش و تاریخ'/>
    </div>
  )
}

export default Filter
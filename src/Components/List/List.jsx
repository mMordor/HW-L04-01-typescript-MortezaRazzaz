import React from 'react'
import style from './List.module.scss'
import Card  from '../Card/Card'
import { useState } from 'react'
import IncomeForm from '../IncomeForm/IncomeForm'
import Filter from '../Fliter/Filter'
import CostForm from '../CostForm/CostForm'


function List({list,categorieslist,isIncome}) {

  const [isformcliked , setIsformcliked] = useState(false)
  const [selectedCat,setSelectedCat] = useState("all")
  const [searched,setSearched] = useState("")  
  
  const addbtnhandl = ()=>{
    setIsformcliked(prev=>!prev)
  }
  console.log(list)
  const filteredlist = list.filter((item)=>
    (selectedCat === "all" || item.category === selectedCat) 
    && 
    (item.name.includes(searched) 
      || 
      item.value.toString().includes(searched)
      ||
      item.date.toString().includes(searched)
      ||
      item.desc?.includes(searched)
    )
  )
  
  return (
    <>
        
        <div className={style.layout}>

          <Filter searchItem={searched} 
            setsearchItem={setSearched} 
            categories={categorieslist} 
            selectedCategories={selectedCat} 
            setSelectedCategories={setSelectedCat}
          />
          
          <div className={style.list}>
          {
            isformcliked ?
              isIncome ? 
              <IncomeForm/> 
              :
              <CostForm/>
            :
              filteredlist.length < 1 ?
                <div className='w-full h-full flex justify-center items-center font-bold text-[20px]'>
                  موردی وجود ندارد
                </div>
              :
              filteredlist.map((item)=>(
                <Card isIncom={isIncome}
                  setisformclicked={setIsformcliked}
                  id={item.id} name={item.name}
                  value={item.value} date={item.date}
                  category={item.category}
                  desc={item.desc}
                  key={item.id}
                  list={list}
                />
              ))
          }
          </div>
          <div className={style.btnTab}>
            {
            isformcliked? 
            <button onClick={addbtnhandl}>{!isIncome ? "بازگشت به لیست هزینه ها" : "بازگشت به لیست منبع درآمد ها"}</button>
            :
            <button onClick={addbtnhandl}>{!isIncome ? "اضافه کردن هزینه" : "اضافه کردن منبع درآمد"}</button>
            }
            
          </div>
        </div>
       
    </>
  )
}

export default List 
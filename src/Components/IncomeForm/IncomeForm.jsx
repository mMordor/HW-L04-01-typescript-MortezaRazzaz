import React from 'react'
import style from './IncomeForm.module.scss'
import { useState } from 'react'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incomeActions } from '../../redux/slices/incomeSlice'
import { IncomeCategoriesContext } from '../../context'

function IncomeForm() {
    const incomes = useSelector((state)=>state.incomes)
    const dispatch = useDispatch()

    const {incomecategories} = useContext(IncomeCategoriesContext)
    
    const [newincom,setNewincome] = useState({
        id : incomes.length,
        name : "",
        value : 0,
        date : "",
        category : "none",
    })

    
    const nameHandle = (e)=>{
        setNewincome(prev=>{return{...prev,name:e.target.value}})
    }
    

    const salaryHandle = (e)=>{
        setNewincome(prev=>{return{...prev,value:Number.parseInt(e.target.value) }})
    }

    const dateHandle = (e)=>{
        setNewincome(prev=>{return{...prev,date:e.target.value}})
    }

    const categoryHandle = (e)=>{
        setNewincome(prev=>{return{...prev,category:e.target.value}})
    }
    const formHandle = (e)=>{
        e.preventDefault();
        dispatch(incomeActions.addIncomeTransaction(newincom))
    }

  return (
    
        <form action="" className={style.form} >

            <div >
                <label htmlFor="name" >
                    Name of Source:
                </label>
                <input type="text" name='name' onChange={(e)=>nameHandle(e)}/>
            </div>

            <div>
                <label htmlFor="name" >
                    Salary:
                </label>
                <input type="number" name='name' onChange={e=>salaryHandle(e)}/>
            </div>

            <div className={style.date}>
                <label htmlFor="name" >
                    Date:
                </label>
                <input type="date" name='name'  onChange={e=>dateHandle(e)}/>
            </div>

            <select className={style.options} onChange={(e)=> categoryHandle(e)} value={newincom.category} >
                <option value={"none"}>None</option>
                {incomecategories.map((c)=>(
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>  

            <button onClick={e=>formHandle(e)}> Confirm </button>
        </form>
    
  )
}

export default IncomeForm
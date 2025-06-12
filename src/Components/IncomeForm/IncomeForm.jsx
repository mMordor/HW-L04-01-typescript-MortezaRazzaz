import React from 'react'
import style from './IncomeForm.module.scss'
import { useState } from 'react'
import { useContext } from 'react'
import { IncomeContext } from '../../context'

function IncomeForm() {
    const {incomes,setIncomes,incomecategories} = useContext(IncomeContext)
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

        setIncomes((prev)=>{
            return[...prev,newincom]
        })

        const data = JSON.parse(localStorage.getItem("Data"));
        data.incomes = [...data.incomes,newincom];
        localStorage.setItem("Data",JSON.stringify(data))
        
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
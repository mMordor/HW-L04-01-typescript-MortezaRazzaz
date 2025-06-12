import React from 'react'
import style from './CostForm.module.scss'
import { useState } from 'react'
import { useContext } from 'react'
import { CostCategoriesContext } from '../../context'
import {useDispatch, useSelector} from 'react-redux'
import { costsAcions } from '../../redux/slices/costSlice'

function CostForm() {
    const costs = useSelector((state)=>state.costs);
    const {costcategories} = useContext(CostCategoriesContext);
    const [newCost,setNewCoste] = useState({
        id : costs.length,
        name : "",
        value : 0,
        category : "none",
        desc :  "",
        date : ""
    })
    const dispatch = useDispatch()

    
    const nameHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,name:e.target.value}})
    }
    const salaryHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,value:Number.parseInt(e.target.value) }})
    }
    const dateHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,date:e.target.value}})
    }
    const descHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,desc:e.target.value}})
    }
    const categoryHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,category:e.target.value}})
    }


    const formHandle = (e)=>{
        e.preventDefault();
        dispatch(costsAcions.addCostTransaction(newCost))
        
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
                    Cost:
                </label>
                <input type="number" name='name' onChange={e=>salaryHandle(e)}/>
            </div>

            <div className={style.date}>
                <label htmlFor="name" >
                    Description:
                </label>
                <input type="text" name='name'  onChange={e=>descHandle(e)}/>
            </div>

            <div className={style.date}>
                <label htmlFor="name" >
                    Date:
                </label>
                <input type="date" name='name'  onChange={e=>dateHandle(e)}/>
            </div>
            
            <select className={style.options} onChange={(e)=> categoryHandle(e)} value={newCost.category} >
                <option value={"none"}>None</option>
                {costcategories.map((c)=>(
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>  

            <button onClick={e=>formHandle(e)}> Confirm </button>
        </form>
    
  )
}

export default CostForm
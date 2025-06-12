import React from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { Cost, Income } from '../Constant/Objects'
import { useEffect } from 'react';


const IncomeContext = createContext();
const CostContext = createContext();

function LayContextsProvider({children}) {

    const [incomes,setIncomes] = useState([]);
    const [costs,setCosts] = useState([]);
    const [costcategories,setCostCategories] = useState(["test1","test2"]);
    const [incomecategories,setIncomeCategories] = useState(["test1","test2"]);

    useEffect(()=>{
      if(localStorage.getItem("Data")){
        const data = JSON.parse(localStorage.getItem("Data"))
        setIncomes(data.incomes);
        setCosts(data.costs);
        console.log(data)
      }else{
        const data={
          costs:[],
          incomes:[]
        }
        localStorage.setItem("Data",JSON.stringify(data))
        console.log("storage:empty")
      }
      
    },[])

console.log("context")
  return (
    <IncomeContext.Provider value={{incomes,setIncomes,incomecategories,setIncomeCategories}}>
        <CostContext.Provider value={{costs,setCosts,costcategories,setCostCategories}}>
            {children}
        </CostContext.Provider>
    </IncomeContext.Provider>
  )
}

export default LayContextsProvider

export {CostContext,IncomeContext}
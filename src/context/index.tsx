import React, { SetStateAction } from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { Dispatch } from 'redux';


const IncomeCategoriesContext = createContext<any>([]);
const CostCategoriesContext = createContext<any>([]);

function LayContextsProvider({children}) {

    const [costcategories,setCostCategories] = useState(["test1","test2"]);
    const [incomecategories,setIncomeCategories] = useState(["test1","test2"]);
  

  return (
    
    <IncomeCategoriesContext.Provider value={{incomecategories,setIncomeCategories}}>
        <CostCategoriesContext.Provider value={{costcategories,setCostCategories}}>
            {children}
        </CostCategoriesContext.Provider>
    </IncomeCategoriesContext.Provider>
  )
}

export default LayContextsProvider

export {CostCategoriesContext,IncomeCategoriesContext}
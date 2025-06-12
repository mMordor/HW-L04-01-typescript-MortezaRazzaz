import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

const IncomeCategoriesContext = createContext();
const CostCategoriesContext = createContext();

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
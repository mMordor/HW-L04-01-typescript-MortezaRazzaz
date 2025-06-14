import React from 'react'
import List from '../../Components/List/List'
import Chart from '../../Components/Chart/Chart'
import TotalCounter from '../../Components/TotalCounter/TotalCounter'
import { useContext } from 'react'
import { IncomeCategoriesContext } from '../../context'
import { useSelector } from 'react-redux'


function IncomePage() {
 const incomes = useSelector((state)=>state.incomes)
 const {incomecategories} = useContext(IncomeCategoriesContext);

  return (
    <>
      <TotalCounter isIncome={true} transaction={incomes}/>
      <List  isIncome={true} list={incomes} categorieslist={incomecategories}/>
      <Chart transaction={incomes}/>
    </>
  )
}

export default IncomePage
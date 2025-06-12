import React from 'react'
import List from '../../Components/List/List'
import Chart from '../../Components/Chart/Chart'
import TotalCounter from '../../Components/TotalCounter/TotalCounter'
import { useContext } from 'react'
import { IncomeContext } from '../../context'





function IncomePage() {
 const {incomes,setIncomes,incomecategories} = useContext(IncomeContext);

  return (
    <>
      <TotalCounter isIncome={true} transaction={incomes}/>
      <List  isIncome={true} setList={setIncomes} list={incomes} categorieslist={incomecategories}/>
      <Chart transaction={incomes}/>
    </>
  )
}

export default IncomePage
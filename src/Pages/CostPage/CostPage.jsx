import React from 'react'
import Chart from '../../Components/Chart/Chart'
import TotalCounter from '../../Components/TotalCounter/TotalCounter'
import { useContext } from 'react'
import { CostCategoriesContext } from '../../context'
import List from '../../Components/List/List'
import { useSelector } from 'react-redux'

function CostPage() {
  const costs = useSelector((state)=>state.costs)
  const {costcategories} = useContext(CostCategoriesContext);
  return (
    <>
      <TotalCounter isIncome={false} transaction={costs}/>
      <List isIncome={false} list={costs} categorieslist={costcategories}/>
      <Chart transaction={costs}/>
    </>
  )
}

export default CostPage
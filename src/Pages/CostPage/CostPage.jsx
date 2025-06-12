import React from 'react'
import Chart from '../../Components/Chart/Chart'
import TotalCounter from '../../Components/TotalCounter/TotalCounter'
import { useContext } from 'react'
import { CostContext } from '../../context'
import List from '../../Components/List/List'

function CostPage() {
  const {costs,setCosts,costcategories} = useContext(CostContext);
  return (
    <>
      <TotalCounter isIncome={false} transaction={costs}/>
      <List isIncome={false} setList={setCosts} list={costs} categorieslist={costcategories}/>
      <Chart transaction={costs}/>
    </>
  )
}

export default CostPage
import React from 'react'
import style from './Chart.module.scss'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


function Chart({transaction}) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#f2ff','#a23f','#ce14'];

  return (
    <div className={style.layout}>
      {
        transaction.length < 1 ?
        
        "آماری وجود ندارد"

        :

        <PieChart width={400} height={400}>
          <Pie
            data={transaction}
            innerRadius={40}
            outerRadius={60}
            fill='#8884d8'
            paddingAngle={7}
            dataKey={"value"}
            label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
          >
            {transaction.map((entry,index)=>(
              <Cell key={`cell-${index}`} fill={COLORS[index ]} />
            ))}

          </Pie>
        </PieChart>
        
      }
    </div>
  )
}

export default Chart
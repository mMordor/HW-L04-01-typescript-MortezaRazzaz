import React from 'react'
import style from './TotalCounter.module.scss'
import { useState } from 'react'
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring'

function TotalCounter({transaction,isIncome}) {
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    let sum = 0;
    transaction.forEach((item)=>{
      sum += item.value
    });

    setTotal(sum)
  },[transaction])

  function Number({n}) {
    const {number} = useSpring(
      {
        from:{number: 0},
        number: n,
        delay: 500,
        config:{ mass: 0.5 ,tension: 70 ,friction: 10},
      }
    )
    return <animated.div>{number.to((n)=>parseInt(n.toFixed(0)).toLocaleString()+" T")}</animated.div>
  }

  return (
    <div className={style.layout}> 
      
        <h1><Number n={total}/></h1>
      <h3>{isIncome ? "درآمد کل" : "هزینه کل"}</h3>
    </div>
  )
}

export default TotalCounter
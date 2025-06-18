import React from 'react'
import style from './Card.module.scss'
import { FaTrashAlt ,FaPencilAlt} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux';
import { transactionActions } from '../../redux/slices/transactionSlice';



function Card({name,value,date,id,category,desc,isIncom}) {

    const dispatch = useDispatch<AppDispatch>()

  
  const removeHandel = ()=>{
    if(isIncom){
        dispatch(transactionActions.removeIncome(id))
    }else{
        dispatch(transactionActions.removeCost(id))
    }
    

  }

  return (
    <div className={style.card}>
        <div>
            {date}
        </div>
        <div className={isIncom? 'bg-green-600 rounded-[12px] pl-2 pr-2' : 'bg-red-600 rounded-[12px] pl-2 pr-2'}>
            {category}
        </div>
        {
            desc ? 
            <div className={style.desc}>
                {desc}
            </div>  
            : 
            ""
        }
         
        <div>
            {value.toLocaleString()}
        </div>  
        <div>
            {name}
        </div>

        <div className={style.optionsbtn}>

            <FaTrashAlt size={20} className={style.btn} onClick={removeHandel}/>

        </div>

    </div>
  )
}

export default Card